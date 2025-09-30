import { zhCN } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { PropsWithChildren } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      localization={zhCN}
    >
      {children}
    </ClerkProvider>
  );
}

export default AuthProvider;
