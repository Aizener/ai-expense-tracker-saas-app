export const categories = [
  { value: 'Food', label: '🍔 餐饮' },
  { value: 'Transportation', label: '🚗 交通消费' },
  { value: 'Shopping', label: '🛒 购物' },
  { value: 'Entertainment', label: '🎬 娱乐' },
  { value: 'Healthcare', label: '🏥 健康' },
  { value: 'Other', label: '📦 其他' },
];

export const getCategoryLabel = (value: string) => {
  const item = categories.find(item => item.value === value);
  if (!item) return '';
  return item.label;
};