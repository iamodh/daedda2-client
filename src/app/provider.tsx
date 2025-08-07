import { Spinner } from '@/components/ui/spinner';
import { useAuth } from '@/lib/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense, useEffect } from 'react';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const { init } = useAuth();

  // 새로고침시 유저 정보 불러오기
  useEffect(() => {
    const initUser = async () => {
      await init();
    };

    initUser();
  }, []);

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
