'use client';
import { BadgeDollarSign, MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useNavs } from '@/hooks/nav';
import { cn } from '@/lib/utils';

import SiteTitle from '../site-title';
import { Button } from '../ui/button';
import { DialogClose } from '../ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';

function AppMobileHeader() {
  const { links } = useNavs();
  const pathname = usePathname();

  return (
    <div className="flex lg:hidden">
      <Drawer direction='top'>
        <DrawerTrigger asChild>
          <Button className="cursor-pointer" variant={'outline'}>
            <MenuIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle asChild>
              <div className='flex justify-between items-center'>
                <div className="flex items-center gap-x-2">
                  <div className="flex p-2 rounded-md bg-gradient-to-tr from-blue-500 via-sky-500 to-blue-400">
                    <BadgeDollarSign className="text-white size-6 lg:size-8" />
                  </div>
                  <SiteTitle />
                </div>
                <DialogClose>
                  <X color='gray' />
                </DialogClose>
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col justify-center items-center gap-y-4 py-6">
            {
              links.map(({ href, label }) => (
                <DialogClose key={href} asChild>
                  <Link
                    href={href}
                    className={cn(
                      'hover:bg-blue-400 hover:text-sky-900 px-5 py-2 rounded-md transition-[background] duration-200',
                      pathname === href ? 'bg-blue-400 text-sky-900' : '',
                    )}
                  >
                    {label}
                  </Link>
                </DialogClose>
              ))
            }
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default AppMobileHeader;
