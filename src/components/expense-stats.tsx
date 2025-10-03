import React from 'react';

import getBestWorstExpense from '@/actions/getBestWorstExpense';
import getUserRecord from '@/actions/getUserRecord';

const ExpenseStats = async () => {
  try {
    const [userRecordResult, rangeResult] = await Promise.all([
      getUserRecord(),
      getBestWorstExpense(),
    ]);

    const { record, daysWithRecords, perDayWithRecords } = userRecordResult;
    const { bestExpense, worstExpense } = rangeResult;

    const validRecord = record || 0;
    const validCount = (daysWithRecords && daysWithRecords > 0) ? daysWithRecords : 1;
    const averageExpense = validRecord / validCount;

    const totalDay = Object.keys(perDayWithRecords || {}).length;
    const perDayExpense = validRecord / totalDay;

    return (
      <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl'>
        <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg'>
            <span className='text-white text-sm sm:text-lg'>📊</span>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100'>
              消费情况
            </h3>
            <p className='text-xs text-gray-500 dark:text-gray-400 mt-0.5'>
              以下是您的消费情况
            </p>
          </div>
        </div>

        <div className='space-y-3 sm:space-y-4'>
          <div className='flex flex-col items-center justify-center gap-y-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-3 sm:p-5 border border-gray-200/50 dark:border-gray-600/50'>
            <div className='w-full flex justify-center items-center flex-col lg:flex-row gap-x-10 gap-y-4'>
              <div className='text-center'>
                <p className='text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 tracking-wide uppercase'>
                  总消费
                </p>
                <div className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
                  ¥{validRecord.toFixed(2)}
                </div>
              </div>
              <div className='text-center'>
                <p className='text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 tracking-wide uppercase'>
                  平均日消费
                </p>
                <div className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
                  ¥{perDayExpense.toFixed(2)}
                </div>
              </div>
              <div className='text-center'>
                <p className='text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 tracking-wide uppercase'>
                  平均每笔消费
                </p>
                <div className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
                  ¥{averageExpense.toFixed(2)}
                </div>
              </div>
            </div>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full text-xs font-medium'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              参考：基于{totalDay}日{validCount}笔的消费情况
            </div>
          </div>
          
          

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
            <div className='bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-red-500 hover:bg-red-50 dark:hover:bg-red-900/30'>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-red-100 dark:bg-red-800 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <span className='text-sm leading-none text-red-600 dark:text-red-300 font-bold'>
                    ↑
                  </span>
                </div>
                <div className='flex-1'>
                  <h4 className='font-bold text-gray-900 dark:text-gray-100 text-xs mb-0.5'>
                    单笔最高消费
                  </h4>
                  <p className='text-lg font-bold text-red-600 dark:text-red-300'>
                    {bestExpense !== undefined ? `¥${bestExpense}` : 'No data'}
                  </p>
                </div>
              </div>
            </div>

            {/* Lowest Expense */}
            <div className='bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-green-500 hover:bg-green-50 dark:hover:bg-green-900/30'>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-green-100 dark:bg-green-800 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <span className='text-sm leading-none text-green-600 dark:text-green-300 font-bold'>
                    ↓
                  </span>
                </div>
                <div className='flex-1'>
                  <h4 className='font-bold text-gray-900 dark:text-gray-100 text-xs mb-0.5'>
                    单笔最低消费
                  </h4>
                  <p className='text-lg font-bold text-green-600 dark:text-green-300'>
                    {worstExpense !== undefined
                      ? `¥${worstExpense}`
                      : 'No data'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching expense statistics:', error);
    return (
      <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl'>
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg'>
            <span className='text-white text-xl'>📊</span>
          </div>
          <div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent'>
              Expense Statistics
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
              Your spending insights and ranges
            </p>
          </div>
        </div>
        <div className='bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-6 rounded-xl border-l-4 border-l-red-500'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-8 h-8 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center'>
              <span className='text-lg'>⚠️</span>
            </div>
            <p className='text-red-800 dark:text-red-300 font-semibold'>
              Unable to load expense statistics
            </p>
          </div>
          <p className='text-red-700 dark:text-red-400 text-sm ml-11'>
            Please try again later
          </p>
        </div>
      </div>
    );
  }
};

export default ExpenseStats;