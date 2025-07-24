import { FormLayout } from '@/components/layouts/form-layout';
import { useState } from 'react';
import { Outlet } from 'react-router';

const FormLayoutWrapper = () => {
  const [title, setTitle] = useState('');
  return (
    <FormLayout title={title}>
      <Outlet context={{ setTitle }} />
    </FormLayout>
  );
};

export default FormLayoutWrapper;
