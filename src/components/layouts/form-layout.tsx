import { FormHeader } from '@/components/ui/header';
import { useNavigate } from 'react-router';

interface FormLayoutProps {
  title: string;
}
export const FormLayout = ({
  title,
  children,
}: React.PropsWithChildren<FormLayoutProps>) => {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      <FormHeader onBackClick={onBackClick} title={title} />
      <main className="pt-18 pb-12">{children}</main>
    </>
  );
};
