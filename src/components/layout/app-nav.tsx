'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useNavs } from '@/hooks/nav';
import { cn } from '@/lib/utils';

function Nav() {
  const pathname = usePathname();
  const { links } = useNavs();
  return (
    <nav className="flex items-center gap-x-2 text-sm font-bold">
      {
        links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'hover:bg-blue-400 hover:text-sky-900 px-5 py-2 rounded-md transition-[background] duration-200',
              pathname === href ? 'bg-blue-400 text-sky-900' : '',
            )}
          >{label}</Link>
        ))
      }
    </nav>
  );
}


export default Nav;
