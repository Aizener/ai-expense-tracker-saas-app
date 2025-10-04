'use server';
import { auth } from '@clerk/nextjs/server';

import { db } from '@/lib/db';

async function getBestWorstExpense(): Promise<{
  bestExpense?: number;
  worstExpense?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: '用户不存在！' };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
      select: { amount: true },
    });

    if (!records || records.length === 0) {
      return { bestExpense: 0, worstExpense: 0 };
    }

    const amounts = records.map((record) => record.amount);

    const bestExpense = Math.max(...amounts);
    const worstExpense = Math.min(...amounts);

    return { bestExpense, worstExpense };
  } catch (error) {
    console.error('获取支出金额时出错:', error); // Log the error
    return { error: '操作失败！' };
  }
}

export default getBestWorstExpense;