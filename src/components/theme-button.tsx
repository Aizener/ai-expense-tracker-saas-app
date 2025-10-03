'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const themeButtonRef = useRef<HTMLDivElement>(null);
  const themeAnimRef = useRef<HTMLDivElement>(null);
  const chaging = useRef<boolean>(false);

  const getLeftAndTop = () => {
    const el = themeButtonRef.current as HTMLDivElement;
    return { left: el.offsetLeft + 32, top: el.offsetTop };
  };

  const changeTheme = () => {
    if (chaging.current) {
      return;
    }
    chaging.current = true;
    const animEl = themeAnimRef.current as HTMLDivElement;
    const { left, top } = getLeftAndTop();
    animEl.style.opacity = '1';
    animEl.style.zIndex = '999';
    animEl.style.backgroundColor = theme === 'dark' ? '#eee' : 'black';
    animEl.style.clipPath = `circle(100% at ${left}px ${top + 12}px)`;
    setTimeout(() => {
      animEl.style.opacity = '0.5';
      animEl.style.zIndex = '-1';
      chaging.current = false;
      requestAnimationFrame(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      });
    }, 700);
  };

  useEffect(() => {
    const animEl = themeAnimRef.current as HTMLDivElement;
    const { left, top } = getLeftAndTop();
    requestAnimationFrame(() => {
      animEl.style.clipPath = `circle(0 at ${left}px ${top + 12}px)`;
    });
  }, [theme]);

  useEffect(() => {
    const animEl = themeAnimRef.current as HTMLDivElement;
    const { left, top } = getLeftAndTop();
    animEl.style.clipPath = `circle(0 at ${left}px ${top + 12}px)`;
  }, []);
  return (
    <div
      className="flex items-center"
      onClick={changeTheme}
    >
      <div className="px-6 cursor-pointer flex items-center" ref={themeButtonRef}>
        {theme === 'dark' ? <Sun color='gray' /> : <Moon color='gray' />}
      </div>
      <div
        className='fixed left-0 top-0 w-[200dvw] h-[200dvh] transition-all duration-700 opacity-0 -z-10 pointer-events-none'
        ref={themeAnimRef}
      ></div>
    </div>
  );
}

export default ThemeButton;
