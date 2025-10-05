import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { BadgeDollarSign, LogIn } from 'lucide-react';

import { getOrCreateUser } from '@/app/actions/user';

import SiteTitle from '../site-title';
import ThemeButton from '../theme-button';
import { Button } from '../ui/button';
import AppMobileHeader from './app-mobile-header';
import AppNav from './app-nav';

async function AppHeader() {
  const clerkUser = await currentUser();
  if (clerkUser) {
    getOrCreateUser(clerkUser);
  }
  return (
    <header className="border-b fixed left-0 top-0 z-50 w-full h-16 bg-background/50 backdrop-blur-lg  px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-x-2">
          <div className="flex p-2 rounded-md bg-gradient-to-tr from-blue-500 via-sky-500 to-blue-400">
            <BadgeDollarSign className="text-foreground size-6 lg:size-8" />
          </div>
          <SiteTitle />
        </div>
        <AppNav />
        <div className="hidden lg:flex">
          <ThemeButton />
          <SignedIn>
            <div className="flex itesm-center gap-x-2">
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="primary" className="cursor-pointer">
                <span>登入</span>
                <LogIn />
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
        <AppMobileHeader />
      </div>
    </header>
  );
}

export default AppHeader;
