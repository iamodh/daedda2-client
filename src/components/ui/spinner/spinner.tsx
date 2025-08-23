import spinner from '@/assets/icons/spinner.svg';
import { cn } from '@/utils/cn';

const sizes = {
  sm: 'size-6',
  md: 'size-12',
  lg: 'size-20',
};

interface SpinnerProps {
  size?: keyof typeof sizes;
  className?: string;
}

export const Spinner = ({ size = 'md', className }: SpinnerProps) => {
  return (
    <img
      data-testid="loading"
      src={spinner}
      className={cn('animate-spin', sizes[size], className)}
    />
  );
};
