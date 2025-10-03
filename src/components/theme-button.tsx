'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="px-6 cursor-pointer flex items-center"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun color='gray' /> : <Moon color='gray' />}
    </div>
  );
}

export default ThemeButton;
