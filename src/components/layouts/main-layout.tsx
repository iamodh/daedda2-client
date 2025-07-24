import { Footer } from '@/components/ui/footer';
import { MainHeader } from '@/components/ui/header';
// temp user
export interface IUser {
  name: string;
}

const tempUser: IUser = {
  name: 'user',
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const onAlertClick = () => {
    alert('Alert');
  };
  const onMenuClick = () => {
    alert('Menu');
  };
  return (
    <div className="max-w-[640px] mx-auto px-4">
      <MainHeader
        user={tempUser}
        onAlertClick={onAlertClick}
        onMenuClick={onMenuClick}
      />
      <main className="py-18">{children}</main>
      <Footer />
    </div>
  );
};
