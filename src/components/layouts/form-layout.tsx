import { FormHeader } from '@/components/ui/header';

export const FormLayout = ({ children }: React.PropsWithChildren) => {
  const onBackClick = () => {
    alert('back');
  };
  return (
    <>
      <FormHeader onBackClick={onBackClick} pageTitle={'form'} />
      <main className="py-18">{children}</main>
    </>
  );
};
