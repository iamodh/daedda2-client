import history from '@/assets/icons/history.svg';
import home from '@/assets/icons/home.svg';
import user from '@/assets/icons/user.svg';

const Footer = () => {
  return (
    <footer className="flex h-[60px] *:flex-1/3 *:flex *:justify-center *:items-center *:flex-col *:text-xs *:gap-1 fixed bottom-0 left-0 right-0 mx-auto max-w-[640px] bg-white">
      <button className="flex-1/3">
        <img src={history} />
        <span>알바 내역</span>
      </button>
      <button className="flex-1/3">
        <img src={home} />
        <span>홈</span>
      </button>
      <button className="flex-1/3">
        <img src={user} />
        <span>마이 페이지</span>
      </button>
    </footer>
  );
};

export { Footer };
