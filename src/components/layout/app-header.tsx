import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { BadgeDollarSign, LogIn } from 'lucide-react';

import SiteTitle from '../site-title';
import { Button } from '../ui/button';
import Nav from './app-nav';

async function AppHeader() {
  const clerkUser = await currentUser();
  return (
    <header className="border-b fixed left-0 top-0 z-50 w-full h-16 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-x-2">
          <div className="flex p-2 rounded-md bg-gradient-to-tr from-blue-500 via-sky-500 to-blue-400">
            <BadgeDollarSign color='white' size="32" />
          </div>
          <SiteTitle />
        </div>
        <Nav />
        <div>
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
      </div>
    </header>
  );
}

export default AppHeader;
