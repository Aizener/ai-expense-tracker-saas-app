'use server';
import { auth } from '@clerk/nextjs/server';

import { db } from '@/lib/db';
import { Record } from '@/types/record';

async function getRecords(): Promise<{
  records?: Record[];
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: '用户不存在！' };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
      orderBy: {
        date: 'desc',
      },
      take: 10,
    });

    return { records };
  } catch (error) {
    console.error('获取记录时出错:', error);
    return { error: '操作失败！' };
  }
}

export default getRecords;