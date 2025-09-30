import { PropsWithChildren } from 'react';

import AuthProvider from './auth-provider';

function ProviderContainer({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default ProviderContainer;
