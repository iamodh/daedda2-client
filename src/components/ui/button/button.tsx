import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';

const buttonVariants = cva(
  'cursor-pointer py-2 rounded-sm inline-flex items-center justify-center gap-1',
  {
    variants: {
      variant: {
        primary:
          ' bg-primary-300  hover:bg-pirmary-500 text-white ring-primary-300 ring-2 hover:ring-pirmary-500',
        secondary:
          'bg-white ring-2 ring-primary-300  hover:ring-pirmary-500 text-black',
        kakao:
          'bg-[#FEE500] ring-2 ring-[#FEE500] hover:bg-[#ffd400] hover:ring-[#ffd400] text-black hover-',
      },
      size: {
        full: 'w-full',
        sm: 'w-16 py-1',
        lg: 'w-32',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'full',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
}

const Button = ({
  variant,
  size,
  children,
  icon,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cn(buttonVariants({ variant, size }))} {...props}>
      {icon ?? icon}
      {children}
    </button>
  );
};

export { Button };
