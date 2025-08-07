import { Spinner } from '@/components/ui/spinner';
import { paths } from '@/config/paths';
import { useAuth } from '@/lib/auth';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isInitializing } = useAuth();

  if (isInitializing) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!user) {
    alert('로그인이 필요한 페이지입니다..');
    return <Navigate to={paths.auth.login.getHref()} replace />;
  }

  return children;
};
