import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const onAlertClick = () => {
    console.log('Alert');
  };

  const onMenuClick = () => {
    console.log('Menu');
  };

  return (
    <div className="max-w-[640px] mx-auto px-4">
      <Header
        user={{ name: 'Jane Doe' }}
        onClickAlert={onAlertClick}
        onClickMenu={onMenuClick}
      />
      <main className="py-20">{children}</main>
      <Footer />
    </div>
  );
};
