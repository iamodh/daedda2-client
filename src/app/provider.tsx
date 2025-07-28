import { Suspense } from 'react';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  return <Suspense fallback={<div>Page Loadint...</div>}>{children}</Suspense>;
};
