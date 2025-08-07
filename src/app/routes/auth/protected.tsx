import { paths } from '@/config/paths';
import { useAuth } from '@/lib/auth';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isInitializing } = useAuth();

  if (isInitializing) {
    return <div>Initializing...</div>;
  }

  if (!user) {
    console.log('navigate');
    return <Navigate to={paths.auth.login.getHref()} replace />;
  }

  return children;
};
