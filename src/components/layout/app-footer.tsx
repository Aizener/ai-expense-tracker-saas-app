import Link from 'next/link';

import { useNavs } from '@/hooks/nav';

import SiteTitle from '../site-title';

function AppFooter() {
  const { links } = useNavs();
  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 border-t border-gray-100/50 dark:border-gray-700/50'>
      {/* Gradient accent line */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Logo and Tagline */}
          <div className='text-center md:text-left'>
            <div className='inline-flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-br from-blue-500 via-sky-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg'>
                <span className='text-white text-lg'>💰</span>
              </div>
              <SiteTitle />
            </div>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm'>
              由人工智能驱动的智能财务管理。跟踪您的支出，管理您的预算，并深入了解您的支出模式。
            </p>
          </div>

          {/* Navigation Links */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>
              快速访问
            </h3>
            <div className='flex flex-col space-y-3'>
              {
                links?.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className='group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200'
                  >
                    <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                    {label}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Features */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>
              特点
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-blue-500 to-green-500 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>🤖</span>
                </div>
                带分析的仪表盘
              </div>
              <div className='flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-green-500 to-teal-400 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>✨</span>
                </div>
                花费的智能分类
              </div>
              <div className='flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>📊</span>
                </div>
                由AI驱动的见解
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-8'></div>

        {/* Copyright and Social */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <p className='text-gray-500 dark:text-gray-400 text-sm'>
              © {new Date().getFullYear()} 备案号：20222202220
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
              本站由i&apos;am cooola支持
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
