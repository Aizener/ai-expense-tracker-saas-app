import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';

async function Page() {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6'>
      {/* User Image - responsive sizing */}
      <div className='relative flex-shrink-0'>
        <Image
          src={user.imageUrl}
          alt={`${user.firstName}&#39;s profile`}
          className='w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-white dark:border-gray-600 shadow-lg'
          width={80}
          height={80}
        />
        <div className='absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center'>
          <span className='text-white text-xs'>✓</span>
        </div>
      </div>

      {/* User Details - responsive text and layout */}
      <div className='flex-1 text-center sm:text-left'>
        <div className='flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-3 mb-3'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-600 via-sky-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg'>
            <span className='text-white text-sm sm:text-lg'>👋</span>
          </div>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100'>
            欢迎回来, {user.firstName}!
          </h2>
        </div>
        <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0'>
          以下是您最近支出活动的快速概述。跟踪您的支出，分析模式，并有效地管理您的预算！
        </p>
        {/* Mobile-optimized badge grid */}
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center sm:justify-start'>
          <div className='bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 border border-emerald-100 dark:border-emerald-800 px-3 py-2 rounded-xl flex items-center gap-2 justify-center sm:justify-start'>
            <div className='w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0'>
              <span className='text-white text-xs'>📅</span>
            </div>
            <div className='text-center sm:text-left'>
              <span className='text-xs font-medium text-gray-500 dark:text-gray-400 block'>
                创建时间
              </span>
              <span className='text-sm font-semibold text-gray-800 dark:text-gray-200'>
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className='bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-100 dark:border-green-800 px-3 py-2 rounded-xl flex items-center gap-2 justify-center sm:justify-start'>
            <div className='w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0'>
              <span className='text-white text-xs'>⚡</span>
            </div>
            <div className='text-center sm:text-left'>
              <span className='text-xs font-medium text-gray-500 dark:text-gray-400 block'>
                上次登入
              </span>
              <span className='text-sm font-semibold text-gray-800 dark:text-gray-200'>
                {user.lastActiveAt
                  ? new Date(user.lastActiveAt).toLocaleDateString()
                  : 'Today'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
