'use server';

import { auth } from '@clerk/nextjs/server';

import { AIInsight, ExpenseRecord,generateExpenseInsights } from '@/lib/ai';
import { db } from '@/lib/db';

export async function getAIInsights(): Promise<AIInsight[]> {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error('不存在用户！');
    }

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const expenses = await db.record.findMany({
      where: {
        userId,
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 50,
    });

    if (expenses.length === 0) {
      return [
        {
          id: 'welcome-1',
          type: 'info',
          title: '欢迎使用ExpenseTracker AI!',
          message:
            '通过添加您的消费情况，将会进行AI分析和提出建议！',
          confidence: 1.0,
        },
        {
          id: 'welcome-2',
          type: 'tip',
          title: '数据可视化',
          message:
            '您的数据将以图表等更为直观的方式展示！',
          confidence: 1.0,
        },
      ];
    }

    const expenseData: ExpenseRecord[] = expenses.map((expense) => ({
      id: expense.id,
      amount: expense.amount,
      category: expense.category || 'Other',
      description: expense.text,
      date: expense.createdAt.toISOString(),
    }));

    const insights = await generateExpenseInsights(expenseData);
    return insights;
  } catch (error) {
    console.error('Error getting AI insights:', error);

    return [
      {
        id: 'error-1',
        type: 'warning',
        title: '分析失败',
        message:
          '当前无法分析您的支出，请稍后再试。',
        action: '重试',
        confidence: 0.5,
      },
    ];
  }
}