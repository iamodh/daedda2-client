import { FormHeader } from '@/components/ui/header';

export const FormLayout = ({ children }: React.PropsWithChildren) => {
  const onBackClick = () => {
    alert('back');
  };
  return (
    <div className="max-w-[640px] mx-auto px-4">
      <FormHeader onBackClick={onBackClick} pageTitle={'form'} />
      <main className="py-18">{children}</main>
    </div>
  );
};
