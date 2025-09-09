import { Spinner } from '@/components/ui/spinner';
import { paths } from '@/config/paths';
import { useAuth } from '@/lib/auth';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isInitializing } = useAuth();

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
