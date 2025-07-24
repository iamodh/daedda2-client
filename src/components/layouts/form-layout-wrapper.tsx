import { FormLayout } from '@/components/layouts/form-layout';
import { Outlet } from 'react-router';

const FormLayoutWrapper = () => {
  return (
    <FormLayout>
      <Outlet />
    </FormLayout>
  );
};

export default FormLayoutWrapper;
