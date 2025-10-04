'use server';
import { User } from '@clerk/nextjs/server';

import { db } from '@/lib/db';

export const getOrCreateUser = async (clerkUser: User) => {
  if (!clerkUser || !clerkUser.id) {
    return new Error('Clerk用户不存在！');
  }

  try {
    const clerkUserId = clerkUser.id;
    const existUser = await db.user.findUnique({ where: { clerkUserId } });
    if (existUser) {
      return existUser;
    }
  
    const newUser = await db.user.create({
      data: {
        clerkUserId,
        email: clerkUser.emailAddresses?.[0]?.emailAddress || '',
        name: clerkUser.firstName ? (clerkUser.firstName + clerkUser.lastName) : '匿名用户',
        imageUrl: clerkUser.imageUrl || '',
      }
    });
  
    return newUser;
  } catch (error) {
    console.error('用户创建失败', error);
    return new Error('用户创建失败！');
  }
};
