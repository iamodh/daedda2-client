import type { FilterKey, FilterValue } from '@/app/routes/app/job-posts';
import useModalDismiss from '@/lib/modal';
import { cn } from '@/utils/cn';
import { useRef, useState } from 'react';

const sizes = {
  sm: 'w-20',
  md: 'w-25',
  lg: 'w-30',
};

interface DropdownOption {
  name: string;
  value: FilterValue;
}

interface DropdownProprs {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  options: DropdownOption[];
  value: FilterValue;
  name: FilterKey;
  onChange: (key: FilterKey, value: FilterValue) => void;
}

const Dropdown = ({
  title,
  options,
  size = 'md',
  value,
  name,
  onChange,
}: DropdownProprs) => {
  const [isOpen, setIsOpen] = useState(false);

  // 외부 클릭시 닫힘
  const dropdownRef = useRef<HTMLDivElement>(null);
  useModalDismiss(dropdownRef, () => setIsOpen(false));

  const selectedOption =
    options.find((option) => option.value === value) || options[0];

  const handleOptionClick = (optionValue: FilterValue) => {
    onChange(name, optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn('relative text-md z-10', sizes[size])}>
      <button
        className={cn(
          'w-full p-0.5 border-slate-400 border-2 rounded-lg cursor-pointer',
          isOpen && 'rounded-b-none border-indigo-500'
        )}
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        {selectedOption.value === null ? title : selectedOption.name}
      </button>
      <ul
        className={cn(
          `absolute top-[100%] left-0 w-full bg-white *:text-center *:py-0.5 hidden *:hover:bg-indigo-100 *:cursor-pointer`,
          isOpen && 'block *:border-indigo-500'
        )}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className="border-2 border-t-0 border-slate-400 last:rounded-b-lg"
            onClick={() => handleOptionClick(option.value)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Dropdown };
