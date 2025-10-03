'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useNavs } from '@/hooks/nav';
import { cn } from '@/lib/utils';

function AppNav() {
  const pathname = usePathname();
  const { links } = useNavs();
  return (
    <nav className="items-center gap-x-2 text-sm font-bold hidden lg:flex">
      {
        links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'hover:bg-emerald-500 hover:text-white px-5 py-2 rounded-md transition-[background] duration-200',
              pathname === href ? 'bg-emerald-500 text-white' : '',
            )}
          >{label}</Link>
        ))
      }
    </nav>
  );
}


export default AppNav;
