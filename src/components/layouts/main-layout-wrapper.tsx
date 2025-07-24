import { MainLayout } from '@/components/layouts/main-layout';
import { Outlet } from 'react-router';

const MainLayoutWrapper = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default MainLayoutWrapper;
