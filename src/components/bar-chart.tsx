'use client';

import {
  BarElement,
  BarOptions,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect,useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { getCategoryLabel } from '@/lib/category';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Record {
  date: string;
  amount: number;
  category: string;
}

function BarChart({ records }: { records: Record[] }) {
  // const { theme } = useTheme();
  const isDark = false; // theme === 'dark';
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;

  const aggregateByDate = (records: Record[]) => {
    const dateMap = new Map<
      string,
      { total: number; categories: string[]; originalDate: string }
    >();

    records.forEach((record) => {
      const dateObj = new Date(record.date);
      const year = dateObj.getUTCFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      const dateKey = `${year}-${month}-${day}`;
      const existing = dateMap.get(dateKey);

      if (existing) {
        existing.total += record.amount;
        if (!existing.categories.includes(record.category)) {
          existing.categories.push(record.category);
        }
      } else {
        dateMap.set(dateKey, {
          total: record.amount,
          categories: [record.category],
          originalDate: record.date,
        });
      }
    });

    return Array.from(dateMap.entries())
      .map(([date, data]) => ({
        date,
        amount: data.total,
        categories: data.categories,
        originalDate: data.originalDate,
      }))
      .sort(
        (a, b) =>
          new Date(a.originalDate).getTime() -
          new Date(b.originalDate).getTime()
      );
  };

  const aggregatedData = aggregateByDate(records);

  const getAmountColor = (amount: number) => {
    if (amount > 100)
      return {
        bg: isDark ? 'rgba(255, 99, 132, 0.3)' : 'rgba(255, 99, 132, 0.2)',
        border: isDark ? 'rgba(255, 99, 132, 0.8)' : 'rgba(255, 99, 132, 1)',
      };
    if (amount > 70)
      return {
        bg: isDark ? 'rgba(255, 206, 86, 0.3)' : 'rgba(255, 206, 86, 0.2)',
        border: isDark ? 'rgba(255, 206, 86, 0.8)' : 'rgba(255, 206, 86, 1)',
      };
    if (amount > 50)
      return {
        bg: isDark ? 'rgba(54, 162, 235, 0.3)' : 'rgba(54, 162, 235, 0.2)',
        border: isDark ? 'rgba(54, 162, 235, 0.8)' : 'rgba(54, 162, 235, 1)',
      };
    return {
      bg: isDark ? 'rgba(75, 192, 192, 0.3)' : 'rgba(75, 192, 192, 0.2)',
      border: isDark ? 'rgba(75, 192, 192, 0.8)' : 'rgba(75, 192, 192, 1)',
    };
  };

  const data = {
    labels: aggregatedData.map((item) => {
      const [, month, day] = item.date.split('-');
      return `${month}/${day}`;
    }),
    datasets: [
      {
        data: aggregatedData.map((item) => item.amount),
        backgroundColor: aggregatedData.map(
          (item) => getAmountColor(item.amount).bg
        ),
        borderColor: aggregatedData.map(
          (item) => getAmountColor(item.amount).border
        ),
        borderWidth: 1,
        borderRadius: 2,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true, // 图表响应式，会根据容器大小自动调整
    maintainAspectRatio: false, // 关闭默认宽高比，方便自适应容器高度
    plugins: {
      legend: {
        display: false, // 不显示图例
      },
      title: {
        display: false, // 不显示图表标题
      },
      tooltip: {
        backgroundColor: isDark
          ? 'rgba(31, 41, 55, 0.95)' // 黑暗模式下的提示框背景色
          : 'rgba(255, 255, 255, 0.95)', // 白天模式下背景色
        titleColor: isDark ? '#f9fafb' : '#1f2937', // 提示框标题颜色
        bodyColor: isDark ? '#d1d5db' : '#374151', // 提示框内容文字颜色
        borderColor: isDark ? '#374151' : '#e5e7eb', // 提示框边框颜色
        borderWidth: 1, // 边框宽度
        cornerRadius: 8, // 提示框圆角
        callbacks: {
          // 自定义提示框显示内容
          label: function (context: { dataIndex: number }) {
            const dataIndex = context.dataIndex;
            const item = aggregatedData[dataIndex];
            const categoriesText =
              item.categories.length > 1
                ? `分类: ${item.categories.map(item => getCategoryLabel(item)).join(',')}`
                : `分类: ${getCategoryLabel(item.categories[0])}`;
            // 返回数组，第一行显示金额，第二行显示分类
            return [`合计: ¥${item.amount.toFixed(2)}`, categoriesText];
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true, // 显示 X 轴标题
          text: '日期，以“天”统计', // X 轴标题文字
          font: {
            size: isMobile ? 12 : 14, // 根据设备调整字体大小
            weight: 'bold' as const, // 字体加粗
          },
          color: isDark ? '#d1d5db' : '#2c3e50', // X 轴标题颜色
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 12, // 刻度文字大小
          },
          color: isDark ? '#9ca3af' : '#7f8c8d', // 刻度文字颜色
          maxRotation: isMobile ? 45 : 0, // X 轴文字旋转角度，移动端倾斜避免重叠
          minRotation: isMobile ? 45 : 0, // 最小旋转角度
        },
        grid: {
          display: false, // 不显示 X 轴网格线
        },
      },
      y: {
        title: {
          display: true, // 显示 Y 轴标题
          text: '消费分析(元)', // Y 轴标题文字
          font: {
            size: isMobile ? 12 : 16, // 字体大小
            weight: 'bold' as const, // 加粗
          },
          color: isDark ? '#d1d5db' : '#2c3e50', // 颜色
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 12, // 刻度文字大小
          },
          color: isDark ? '#9ca3af' : '#7f8c8d', // 刻度文字颜色
          callback: function (value: string | number) {
            return '¥' + value; // 格式化 Y 轴刻度，加上货币符号
          },
        },
        grid: {
          color: isDark ? '#374151' : '#e0e0e0', // Y 轴网格颜色
        },
        beginAtZero: true, // Y 轴从 0 开始
      },
    },
  };


  return (
    <div className='relative w-full h-64 sm:h-72 md:h-80'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
