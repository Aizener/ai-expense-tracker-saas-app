'use server';
import { auth } from '@clerk/nextjs/server';

import { db } from '@/lib/db';

async function getUserRecord(): Promise<{
  record?: number;
  daysWithRecords?: number;
  perDayWithRecords?: Record<string, number>;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: '不存在用户！' };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
    });

    const record = records.reduce((sum, record) => sum + record.amount, 0);
    const perDayWithRecords: Record<string, number> = {};

    records.forEach(item => {
      const key = item.date.toString().slice(0, 11);
      if (!perDayWithRecords[key]) {
        perDayWithRecords[key] = 0;
      }
      perDayWithRecords[key] += item.amount;
    });

    const daysWithRecords = records.filter(
      (record) => record.amount > 0
    ).length;

    return { record, daysWithRecords, perDayWithRecords };
  } catch (error) {
    console.error('查询失败:', error); // Log the error
    return { error: '查询失败' };
  }
}

export default getUserRecord;