'use server';
import { categorizeExpense } from '@/lib/ai';

export async function suggestCategory(
  description: string
): Promise<{ category: string; error?: string }> {
  try {
    if (!description || description.trim().length < 2) {
      return {
        category: 'Other',
        error: '提示词太短！',
      };
    }

    const category = await categorizeExpense(description.trim());
    return { category };
  } catch (error) {
    console.error('无法推荐分类:', error);
    return {
      category: 'Other',
      error: '无法推荐分类！',
    };
  }
}