import { FormHeader } from '@/components/ui/header';
import { useNavigate } from 'react-router';

export const FormLayout = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      <FormHeader onBackClick={onBackClick} pageTitle={'form'} />
      <main className="pt-18 pb-12">{children}</main>
    </>
  );
};
