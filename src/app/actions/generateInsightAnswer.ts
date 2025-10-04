'use server';
export const runtime = 'nodejs';

import { auth } from '@clerk/nextjs/server';

import { ExpenseRecord,generateAIAnswer } from '@/lib/ai';
import { db } from '@/lib/db';

export async function generateInsightAnswer(question: string): Promise<string> {
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

    const expenseData: ExpenseRecord[] = expenses.map((expense) => ({
      id: expense.id,
      amount: expense.amount,
      category: expense.category || 'Other',
      description: expense.text,
      date: expense.createdAt.toISOString(),
    }));

    // Generate AI answer
    const answer = await generateAIAnswer(question, expenseData);
    return answer;
  } catch (error) {
    console.error('Error generating insight answer:', error);
    return '目前我无法提供详细答案。请尝试刷新洞察或检查您的连接。';
  }
}