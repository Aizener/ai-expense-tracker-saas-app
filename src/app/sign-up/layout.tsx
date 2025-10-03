import { auth } from '@clerk/nextjs/server';
import { PropsWithChildren } from 'react';

async function Layout({ children }: PropsWithChildren) {
  const { userId } = await auth();

  if (userId) {
    return (
      <div
        className="mt-8 mx-auto flex justify-center items-center px-30 py-16 text-lg font-bold bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 rounded-md shadow-xl text-foreground"
      >
        跳转中...
        {children}
      </div>
    );
  }

  return (
    <div className="flex justify-center max-auto my-4 lg:my-10 gap-x-8 w-full">
      <div className="hidden lg:block flex-1 bg-gradient-to-br from-blue-100 via-sky-100 to-teal-100 rounded-md p-10 shadow-xl dark:bg-gray-50 dark:from-gray-300 dark:via-gray-400 dark:to-gray-300">
        <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-5xl font-bold mb-4 sm:mb-6 text-gray-900'>
          加入{' '}
          <span className='bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 bg-clip-text text-transparent'>
            ExpenseTracker AI
          </span>
        </h1>
        <p className="text-sm text-gray-700 mt-4">您的智能消费分析工具，总结您的消费问题。</p>
        <p className="text-sm text-gray-700 mt-4">并提出建议，帮助您合理规划支出，避免不必要开销，优化理财习惯。</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0 mt-10'>
          <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50'>
            <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
              <span className='text-foreground text-base sm:text-lg'>🤖</span>
            </div>
            <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
              AI分析
            </h3>
            <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
              基于AI对消费记录进行分析
            </p>
          </div>
          <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50'>
            <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
              <span className='text-foreground text-base sm:text-lg'>✨</span>
            </div>
            <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
              自动分类
            </h3>
            <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
              通过AI进行消费记录的分类
            </p>
          </div>
          <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 sm:col-span-2 md:col-span-1'>
            <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
              <span className='text-foreground text-base sm:text-lg'>📊</span>
            </div>
            <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
              可视化
            </h3>
            <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
              通过可视化图更直观的展示消费情况
            </p>
          </div>
        </div>
      </div>
      <main className="lg:min-w-xs">
        {children}
      </main>
    </div>
  );
}

export default Layout;
