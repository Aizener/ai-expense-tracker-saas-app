import { PropsWithChildren } from 'react';

import AuthProvider from './auth-provider';
import { ThemeProvider } from './theme-provider';

function ProviderContainer({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default ProviderContainer;
