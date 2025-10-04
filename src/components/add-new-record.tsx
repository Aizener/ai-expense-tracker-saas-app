'use client';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { useRef, useState } from 'react';

import addExpenseRecord from '@/app/actions/addExpenseRecord';
import { suggestCategory } from '@/app/actions/suggestCategory';
import { categories, getCategoryLabel } from '@/lib/category';

import { Calendar } from './ui/calendar';
import { Command, CommandGroup, CommandItem, CommandList } from './ui/command';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

function AddNewRecord() {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(0);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isCategorizingAI, setIsCategorizingAI] = useState(false);
  const [date, setDate] = useState<string>('');
  const [openSelect, setOpenSelect] = useState(false);

  const clientAction = async (formData: FormData) => {
    setIsLoading(true); // Show spinner
    setAlertMessage(null); // Clear previous messages

    formData.set('amount', amount.toString());
    formData.set('category', category);
    formData.set('date', date);

    const { error } = await addExpenseRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('消费记录添加成功!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount(0);
      setCategory('');
      setDescription('');
    }

    setIsLoading(false);
  };

  const handleAISuggestCategory = async () => {
    if (!description.trim()) {
      setAlertMessage('Please enter a description first');
      setAlertType('error');
      return;
    }

    setIsCategorizingAI(true);
    setAlertMessage(null);

    try {
      const result = await suggestCategory(description);
      console.log('%c [ result ]-53', 'font-size:13px; background:skyblue; color:#bf2c9f;', result);
      if (result.error) {
        setAlertMessage(`AI Suggestion: ${result.error}`);
        setAlertType('error');
      } else {
        setCategory(result.category);
        setAlertMessage(`AI推荐分类: ${result.category}`);
        setAlertType('success');
      }
    } catch {
      setAlertMessage('Failed to get AI category suggestion');
      setAlertType('error');
    } finally {
      setIsCategorizingAI(false);
    }
  };

  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl'>
      <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg'>
          <span className='text-white text-sm sm:text-lg'>💳</span>
        </div>
        <div>
          <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight'>
            添加新的消费记录
          </h3>
          <p className='text-xs text-gray-500 dark:text-gray-400 mt-0.5'>
            分析您的消费记录，保持预算
          </p>
        </div>
      </div>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className='space-y-6 sm:space-y-8'
      >
        {/* Expense Description and Date */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-emerald-50/50 to-green-50/50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-xl border border-emerald-100/50 dark:border-emerald-800/50'>
          {/* Expense Description */}
          <div className='space-y-1.5'>
            <label
              htmlFor='text'
              className='flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-emerald-500 rounded-full'></span>
              消费描述
            </label>
            <div className='relative'>
              <input
                type='text'
                id='text'
                name='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full pl-3 pr-12 sm:pr-14 py-2.5 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200/80 dark:border-gray-600/80 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-gray-700/90 focus:border-emerald-400 dark:focus:border-emerald-400 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm shadow-sm hover:shadow-md transition-all duration-200'
                placeholder='早餐、咖啡、零食、乘车等...'
                required
              />
              <button
                type='button'
                onClick={handleAISuggestCategory}
                disabled={isCategorizingAI || !description.trim()}
                className='absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-7 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 disabled:from-gray-300 disabled:to-gray-300 text-white rounded-lg text-xs font-medium flex items-center justify-center shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-200'
                title='AI Category Suggestion'
              >
                {isCategorizingAI ? (
                  <div className='w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                ) : (
                  <span className='text-xs'>✨</span>
                )}
              </button>
            </div>
            {isCategorizingAI && (
              <div className='flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400'>
                <div className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></div>
                正通过AI分析您的描述分类...
              </div>
            )}
          </div>

          {/* Expense Date */}
          <div className='space-y-1.5'>
            <label
              htmlFor='date'
              className='flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
              消费时间
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className='w-full flex justify-between px-3 py-2.5 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200/80 dark:border-gray-600/80 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-gray-700/90 focus:border-emerald-400 dark:focus:border-emerald-400 text-gray-900 dark:text-gray-100 text-sm shadow-sm hover:shadow-md transition-all duration-200'
                >
                  <span>{date ? date : '请选择时间'}</span>
                  <span>📅</span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={new Date(date)}
                  onSelect={date => setDate(date ? format(date, 'yyyy/MM/dd') : '')}
                  locale={zhCN}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Category Selection and Amount */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl border border-green-100/50 dark:border-green-800/50'>
          {/* Category Selection */}
          <div className='space-y-1.5'>
            <label
              htmlFor='category'
              className='flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
              分类
              <span className='text-xs text-gray-400 dark:text-gray-500 ml-2 font-normal hidden sm:inline'>
                点击上面 ✨ 将进行AI自动生成
              </span>
            </label>
            <Popover open={openSelect} onOpenChange={setOpenSelect}>
              <PopoverTrigger asChild>
                <div
                  className='w-full flex justify-between px-3 py-2.5 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200/80 dark:border-gray-600/80 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-gray-700/90 focus:border-emerald-400 dark:focus:border-emerald-400 text-gray-900 dark:text-gray-100 text-sm shadow-sm hover:shadow-md transition-all duration-200 mb-0 h-auto!'
                >
                  <span>{category ? getCategoryLabel(category) : '请选择分类...'}</span>
                  <span>⭐</span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-64">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {
                        categories.map((item, key) => (
                          <CommandItem
                            key={key}
                            value={item.value}
                            className="text-gray-900 dark:text-gray-100"
                            onSelect={(currentValue) => {
                              setCategory(currentValue === category ? '' : currentValue);
                              setOpenSelect(false);
                            }}
                          >
                            {item.label}
                          </CommandItem>
                        ))
                      }
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Amount */}
          <div className='space-y-1.5'>
            <label
              htmlFor='amount'
              className='flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide'
            >
              <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
              消费金额
              <span className='text-xs text-gray-400 dark:text-gray-500 ml-2 font-normal hidden sm:inline'>
                请输入消费金额
              </span>
            </label>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 font-medium text-sm'>
                $
              </span>
              <input
                type='number'
                name='amount'
                id='amount'
                min='0'
                max='1000'
                step='0.1'
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className='w-full pl-6 pr-3 py-2.5 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200/80 dark:border-gray-600/80 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-gray-700/90 focus:border-emerald-400 dark:focus:border-emerald-400 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200'
                placeholder='0.00'
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-4 py-2 rounded-xl font-semibold shadow-xl hover:shadow-2xl group transition-all duration-300 border-2 border-transparent hover:border-white/20 text-sm sm:text-base cursor-pointer'
          disabled={isLoading}
        >
          <div className='relative flex items-center justify-center gap-2'>
            {isLoading ? (
              <>
                <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                <span>处理中...</span>
              </>
            ) : (
              <>
                <span className='text-lg'>💫</span>
                <span>添加消费记录</span>
              </>
            )}
          </div>
        </button>
      </form>

      {/* Alert Message */}
      {alertMessage && (
        <div
          className={`mt-4 p-3 rounded-xl border-l-4 backdrop-blur-sm ${
            alertType === 'success'
              ? 'bg-green-50/80 dark:bg-green-900/20 border-l-green-500 text-green-800 dark:text-green-200'
              : 'bg-red-50/80 dark:bg-red-900/20 border-l-red-500 text-red-800 dark:text-red-200'
          }`}
        >
          <div className='flex items-center gap-2'>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                alertType === 'success'
                  ? 'bg-green-100 dark:bg-green-800'
                  : 'bg-red-100 dark:bg-red-800'
              }`}
            >
              <span className='text-sm'>
                {alertType === 'success' ? '✅' : '⚠️'}
              </span>
            </div>
            <p className='font-medium text-sm'>{alertMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewRecord;