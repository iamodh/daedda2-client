import { AuthLayout } from '@/components/layouts/auth-layout';
import { paths } from '@/config/paths';
import { LoginForm } from '@/features/auth/components/login-form';
import { useNavigate } from 'react-router';

const LoginRoute = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <LoginForm
        onSuccess={() => {
          navigate(paths.app.jobPosts.getHref(), { replace: true });
        }}
      />
    </AuthLayout>
  );
};

export default LoginRoute;
