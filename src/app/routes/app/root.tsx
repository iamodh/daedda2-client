import { Outlet } from 'react-router';

const AppRoot = () => {
  return (
    <div className="max-w-[640px] mx-auto px-4">
      <Outlet />
    </div>
  );
};

export default AppRoot;
