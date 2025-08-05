import { cn } from '@/utils/cn';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | undefined;
  registration?: Partial<UseFormRegisterReturn>;
  className?: string;
}

const Input = ({
  label,
  type = 'text',
  error,
  registration,
  placeholder,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="flex flex-col text-sm gap-1">
        {label}
        <input
          {...props}
          {...registration}
          type={type}
          placeholder={placeholder}
          className={cn(
            `rounded-sm ring-slate-600 ring-2 focus:ring-indigo-500 outline-0 p-2`,
            className
          )}
        />
      </label>
      <p role="alert" className="text-sm font-semibold text-red-500">
        {error?.message}
      </p>
    </div>
  );
};

export { Input };
