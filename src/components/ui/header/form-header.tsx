import { Dividor } from '@/components/ui/form/dividor';
import back from '@/assets/icons/back.svg';

interface FormHeaderProps {
  title: string;
  onBackClick: () => void;
}

const FormHeader = ({ title, onBackClick }: FormHeaderProps) => {
  return (
    <header className="fixed pt-4 px-4 top-0 left-0 right-0 mx-auto max-w-[640px] bg-white h-[56px]">
      <button className="absolute cursor-pointer" onClick={onBackClick}>
        <img src={back} className="p-2 -mt-2" />
      </button>
      <h1 className="h-full text-center text-lg font-semibold">{title}</h1>
      <Dividor />
    </header>
  );
};

export { FormHeader };
