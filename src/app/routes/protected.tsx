import { Spinner } from '@/components/ui/spinner';
import { paths } from '@/config/paths';
import { useAuth } from '@/lib/auth';
import { useEffect } from 'react';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { init, user, isInitializing } = useAuth();

  // 새로고침시 유저 정보 불러오기
  useEffect(() => {
    const initUser = async () => {
      await init();
    };

    initUser();
  }, []);

  if (isInitializing) {
    return (
      <div className="h-screen flex flex-col justify-center items-center gap-2">
        <Spinner size="lg" />
        <span className="text-sm">유저 정보 확인하는 중...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={paths.auth.login.getHref()} replace />;
  }

  return children;
};
