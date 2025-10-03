import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>带有AI的花费分析工具</span>
            <span className='sm:hidden'>AI 分析</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight'>
            关于{' '}
            <span className='bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 bg-clip-text text-transparent'>
              ExpenseTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            您的智能伴侣，通过主流的人工智能洞察力跟踪支出和管理财务。
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10'>立刻开始</span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>
            <Link
              href='/contact'
              className='group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500'></div>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
            小站的目的
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100 px-2 sm:px-0'>
            分析您的消费情况{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>由AI驱动</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto'>
            在ExpenseTracker AI，我们利用尖端的人工智能来彻底改变个人实现财务健康的方式。我们的人工智能分析您的支出模式，提供个性化建议和可操作的见解，从而实现更好的预算。
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50'>
              <div className='text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2'>
                1+
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                活跃用户
              </div>
            </div>
            <div className='bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-green-100 dark:border-green-800/50'>
              <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>
                ¥10+
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                分析金额
              </div>
            </div>
            <div className='bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50'>
              <div className='text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2'>
                99.9%
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                好评率
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              小站的特点
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
              为什么使用{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                ExpenseTracker AI?
              </span>
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              我们通过AI来管理你的消费情况并进行分析，而且完全免费！
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>🤖</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  AI驱动
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  通过对您的支出模式进行智能分析
                </p>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>✨</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  智能分类
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  让我们的AI自动对您的支出进行99%的分类准确性，并提供量身定制的建议，以提高您的预算管理毫不费力。
                </p>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg mb-6'>
                  <span className='text-white text-xl'>📊</span>
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
                  可视化仪表盘
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  体验现代、人工智能增强的实时界面洞察力、交互式财务分析和美丽使数据有意义的可视化。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-full blur-2xl'></div>
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-2xl'></div>

        <div className='max-w-4xl mx-auto relative z-10'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              小站的故事
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100'>
              为我这类人{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                而创造
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                ExpenseTracker AI诞生于创建真正智能的财务管理工具的愿景。我们的财务专家、数据科学家和技术专家团队共同解决了一个关键问题：使个人财务管理更智能、更直观、更有效。
              </p>
              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
自推出以来，我们通过人工智能的力量帮助数千名用户实现了更好的预算，并改善了他们的整体财务状况。每个功能的设计都考虑到了用户体验和财务健康。
              </p>
              <div className='flex items-center gap-4 pt-4'>
                <div className='flex -space-x-2'>
                  <div className='w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                  <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                  <div className='w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>
                  <div className='font-semibold'>期待您的信任并开始使用！</div>
                  <div>期待中...</div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50'>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-gray-100 font-medium'>
                    盲目消费
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-gray-100 font-medium'>
                    冲动消费
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-teal-500 dark:bg-teal-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-gray-100 font-medium'>
                    不明消费
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-gray-100 font-medium'>
                    报复性消费
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500'></div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg'>
            <span className='w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            准备好开始使用了嘛?
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100'>
            掌握并分析您的{' '}
            <span className='bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 bg-clip-text text-transparent'>
              消费情况
            </span>
          </h2>

          <p className='text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>
            已经有数千名用户通过ExpenseTracker AI实现了更好的预算和财务健康。现在轮到您了!
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Link
              href='/'
              className='group relative overflow-hidden bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10 flex items-center gap-2'>
                免费开始
                <span className='text-lg'>→</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>

            <Link
              href='/contact'
              className='group border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2'
            >
              联系我
              <span className='text-lg group-hover:translate-x-0.5 transition-transform duration-200'>
                💬
              </span>
            </Link>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2'>
                Free
              </div>
              <div className='text-gray-600 dark:text-gray-400'>
                完全免费
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>
                AI
              </div>
              <div className='text-gray-600 dark:text-gray-400'>
                智能分析
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2'>
                快速
              </div>
              <div className='text-gray-600 dark:text-gray-400'>
                几分钟就可完成
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;