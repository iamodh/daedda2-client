import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError | undefined;
  registration: Partial<UseFormRegisterReturn>;
  placeholder?: string;
}

const Textarea = ({
  label,
  error,
  registration,
  placeholder,
  ...props
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex flex-col text-sm gap-1">
        {label}
        <textarea
          {...props}
          {...registration}
          placeholder={placeholder}
          rows={4}
          className={`w-full rounded-sm ring-slate-600 ring-2 focus:ring-indigo-500 outline-0 p-2`}
        />
      </label>
      <p role="alert" className="text-sm font-semibold text-red-500">
        {error?.message}
      </p>
    </div>
  );
};

export { Textarea };
