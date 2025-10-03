'use client';
import { zhCN } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import { PropsWithChildren } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <ClerkProvider
      localization={zhCN}
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
      }}
    >
      {children}
    </ClerkProvider>
  );
}

export default AuthProvider;
