import { AuthLayout } from '@/components/layouts/auth-layout';
import { paths } from '@/config/paths';
import { RegisterForm } from '@/features/auth/components/register-form';
import { useNavigate } from 'react-router';

const RegisterRoute = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <RegisterForm
        onSuccess={() =>
          navigate(paths.app.jobPosts.getHref(), { replace: true })
        }
      />
    </AuthLayout>
  );
};

export default RegisterRoute;
