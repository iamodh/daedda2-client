import { FormLayout, MainLayout } from '@/components/layouts';
import { Outlet } from 'react-router';

const AppRoot = () => {
  return (
    <FormLayout>
      <Outlet />
    </FormLayout>
  );
};

export default AppRoot;
