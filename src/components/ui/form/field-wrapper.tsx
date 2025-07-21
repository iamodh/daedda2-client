import type { PropsWithChildren } from 'react';

interface FieldWrapperProps {
  label: string;
}

export const FieldWrapper = ({
  label,
  children,
}: PropsWithChildren<FieldWrapperProps>) => {
  return (
    <div>
      <label className="flex flex-col text-sm gap-1">
        {label}
        {children}
      </label>
    </div>
  );
};
