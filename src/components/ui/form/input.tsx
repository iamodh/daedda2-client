interface InputProps {
  label: string;
}

const Input = ({ label }: InputProps) => {
  return (
    <label className="flex flex-col text-sm gap-1">
      {label}
      <input className="w-full rounded-sm ring-slate-600 ring-2 focus:ring-indigo-500 outline-0 py-1 px-2" />
    </label>
  );
};

export { Input };
