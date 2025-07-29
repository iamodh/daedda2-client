import { Spinner } from '@/components/ui/spinner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <Suspense
      fallback={
        <div className="h-screen flex justify-center items-center">
          <Spinner size="lg" />
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
