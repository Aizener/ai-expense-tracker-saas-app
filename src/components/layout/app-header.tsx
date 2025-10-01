import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { BadgeDollarSign, LogIn } from 'lucide-react';

import SiteTitle from '../site-title';
import { Button } from '../ui/button';
import Nav from './app-nav';

function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b fixed left-0 top-0 z-50 w-full h-16 px-8 bg-white">
      <div className="flex items-center gap-x-2">
        <div className="flex p-2 rounded-md bg-gradient-to-tr from-blue-500 via-sky-500 to-blue-400">
          <BadgeDollarSign color='white' size="32" />
        </div>
        <SiteTitle />
      </div>
      <Nav />
      <div>
        <SignedIn>
          User
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
    </header>
  );
}

export default AppHeader;
