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
    <>
      <MainHeader
        user={tempUser}
        onAlertClick={onAlertClick}
        onMenuClick={onMenuClick}
      />
      <main className="pt-15 pb-18">{children}</main>
      <Footer />
    </>
  );
};
