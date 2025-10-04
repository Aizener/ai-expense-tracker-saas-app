'use server';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

import { db } from '@/lib/db';

async function deleteRecord(recordId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: '用户不存在！' };
  }

  try {
    await db.record.delete({
      where: {
        id: recordId,
        userId,
      },
    });

    revalidatePath('/');

    return { message: '成功删除消费记录！' };
  } catch (error) {
    console.error('成功删除消费记录！:', error); // Log the error
    return { error: '删除失败！' };
  }
}

export default deleteRecord;