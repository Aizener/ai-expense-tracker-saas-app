'use server';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

import { db } from '@/lib/db';

interface RecordData {
  text: string;
  amount: number;
  category: string;
  date: string; // Added date field
}

interface RecordResult {
  data?: RecordData;
  error?: string;
}

async function addExpenseRecord(formData: FormData): Promise<RecordResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');
  const categoryValue = formData.get('category');
  const dateValue = formData.get('date'); // Extract date from formData

  // Check for input values
  if (
    !textValue ||
    textValue === '' ||
    !amountValue ||
    !categoryValue ||
    categoryValue === '' ||
    !dateValue ||
    dateValue === ''
  ) {
    return { error: '请完善表单后提交！' };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());
  const category: string = categoryValue.toString();
  let date: string;
  try {
    const inputDate = dateValue.toString();
    const [year, month, day] = inputDate.split('/');
    const dateObj = new Date(
      Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day), 0, 0, 0)
    );
    date = dateObj.toISOString();
  } catch (error) {
    console.error('表单校验失败:', error);
    return { error: '表单校验失败！' };
  }

  const { userId } = await auth();

  if (!userId) {
    return { error: '没有存在的用户！' };
  }

  try {
    const createdRecord = await db.record.create({
      data: {
        text,
        amount,
        category,
        date,
        userId,
      },
    });

    const recordData: RecordData = {
      text: createdRecord.text,
      amount: createdRecord.amount,
      category: createdRecord.category,
      date: createdRecord.date?.toISOString() || date,
    };

    revalidatePath('/');

    return { data: recordData };
  } catch (error) {
    console.error('添加消费记录失败:', error); // Log the error
    return {
      error: '添加消费记录失败！',
    };
  }
}

export default addExpenseRecord;
