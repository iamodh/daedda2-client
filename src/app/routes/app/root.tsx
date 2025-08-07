import { useAuth } from '@/lib/auth';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

const AppRoot = () => {
  const { init } = useAuth();

  useEffect(() => {
    const initUser = async () => {
      init();
    };

    initUser();
  }, []);
  return (
    <div className="max-w-[640px] mx-auto px-4">
      <Outlet />
    </div>
  );
};

export default AppRoot;
