import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';

const buttonVariants = cva(
  'cursor-pointer py-2 rounded-lg inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        primary:
          ' bg-primary-300  hover:bg-pirmary-500 text-white ring-primary-300 ring-2 hover:ring-pirmary-500',
        secondary:
          'bg-white ring-2 ring-primary-300  hover:ring-pirmary-500 text-black',
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
    VariantProps<typeof buttonVariants> {}

const Button = ({
  variant,
  size,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="submit"
      className={cn(buttonVariants({ variant, size }))}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
