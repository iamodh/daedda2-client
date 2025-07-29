import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import spinner from '@/assets/icons/spinner.svg';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <Suspense
      fallback={
        <div className="h-screen flex justify-center items-center">
          <img src={spinner} className="size-20 animate-spin" />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        {children}
      </QueryClientProvider>
    </Suspense>
  );
};
