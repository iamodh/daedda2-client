import type { PropsWithChildren } from 'react';
import type React from 'react';

interface FloatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const FloatingButton = ({
  icon,
  onClick,
}: PropsWithChildren<FloatingButtonProps>) => {
  return (
    <button
      className="size-14 bg-linear-30 from-pink-200 to-pirmary-500 fixed bottom-20 self-end rounded-full mr-4 flex justify-center items-center shadow-xl cursor-pointer"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export { FloatingButton };
