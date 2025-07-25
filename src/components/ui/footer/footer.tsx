import history from '@/assets/icons/history.svg';
import historyPurple from '@/assets/icons/history-purple.svg';
import home from '@/assets/icons/home.svg';
import homePurple from '@/assets/icons/home-purple.svg';

import user from '@/assets/icons/user.svg';
import userPurple from '@/assets/icons/user-purple.svg';

import { paths } from '@/config/paths';
import { cn } from '@/utils/cn';
import { NavLink } from 'react-router';

const Footer = () => {
  const navigation = [
    {
      name: '알바 내역',
      to: paths.app.history.getHref(),
      icon: history,
      iconActive: historyPurple,
    },
    {
      name: '홈',
      to: paths.app.jobPosts.getHref(),
      icon: home,
      iconActive: homePurple,
    },
    {
      name: '마이 페이지',
      to: paths.app.profile.getHref(),
      icon: user,
      iconActive: userPurple,
    },
  ];
  return (
    <footer className="flex h-[60px] *:flex-1/3 *:flex *:justify-center *:items-center *:flex-col *:text-xs *:gap-1 fixed bottom-0 left-0 right-0 mx-auto max-w-[640px] bg-white">
      {navigation.map((item) => (
        <NavLink key={item.name} to={item.to} end className="flex-1/3">
          {({ isActive }) => (
            <>
              <img src={isActive ? item.iconActive : item.icon} />
              <span className={cn(isActive && 'text-primary-300')}>
                {item.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </footer>
  );
};

export { Footer };
