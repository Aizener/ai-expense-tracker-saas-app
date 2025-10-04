'use server';
export const runtime = 'nodejs';

import { auth } from '@clerk/nextjs/server';

import { db } from '@/lib/db';
import { Record } from '@/types/record';

async function getRecords(page = 1, pageSize = 10): Promise<{
  records?: Record[];
  total?: number;
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
      skip: page ? (page - 1) * pageSize : 0,
      take: pageSize,
    });
    const total = await db.record.count({
      where: { userId }
    });

    return { records, total };
  } catch (error) {
    console.error('获取记录时出错:', error);
    return { error: '操作失败！' };
  }
}

export default getRecords;