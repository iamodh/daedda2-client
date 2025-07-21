import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
}

const Input = ({
  label,
  type = 'text',
  registration,
  placeholder,
}: InputProps) => {
  return (
    <label className="flex flex-col text-sm gap-1">
      {label}
      <input
        {...registration}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-sm ring-slate-600 ring-2 focus:ring-indigo-500 outline-0 p-2`}
      />
    </label>
  );
};

export { Input };
