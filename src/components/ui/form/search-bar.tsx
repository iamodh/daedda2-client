import { useForm, type SubmitHandler } from 'react-hook-form';
import search from '@/assets/icons/search.svg';
interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

interface SearchBarInputs {
  searchKeyword: string;
}

const SearchBar = ({ setSearchKeyword, ...props }: SearchBarProps) => {
  const { register, handleSubmit } = useForm<SearchBarInputs>();

  const onSubmit: SubmitHandler<SearchBarInputs> = (values) => {
    setSearchKeyword(values.searchKeyword);
  };

  return (
    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('searchKeyword')}
        {...props}
        className="ring-2 ring-slate-400 rounded-xl py-1.5 pl-3 pr-12 focus:ring-indigo-500 outline-0 w-full"
        placeholder="검색어를 통해 원하는 구인 글을 찾으세요!"
      />
      <button className="absolute top-1/2 right-2 p-1.5 -translate-y-1/2 cursor-pointer">
        <img src={search} />
      </button>
    </form>
  );
};

export { SearchBar };
