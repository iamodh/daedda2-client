interface InputProps {
  label: string;
  type?: string;
}

const Input = ({ label, type = 'text' }: InputProps) => {
  return (
    <label className="flex flex-col text-sm gap-1">
      {label}
      <input
        type={type}
        className={`w-full rounded-sm ring-slate-600 ring-2 focus:ring-indigo-500 outline-0 p-2`}
      />
    </label>
  );
};

export { Input };
