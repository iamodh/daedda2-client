import { Spinner } from '@/components/ui/spinner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <Suspense
      fallback={
        <div className="h-screen flex flex-col justify-center items-center gap-2">
          <Spinner size="lg" />
          <span className="text-sm">페이지 불러오는 중...</span>
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        {children}
      </QueryClientProvider>
    </Suspense>
  );
};
