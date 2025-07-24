import logo from '@/assets/logo.png';
import bell from '@/assets/icons/bell.svg';
import menu from '@/assets/icons/menu.svg';
import { Link } from 'react-router';
import { paths } from '@/config/paths';
import type { IUser } from '@/components/layouts';

interface MainHeaderProps {
  user?: IUser;
  onAlertClick: () => void;
  onMenuClick: () => void;
}
const MainHeader = ({ user, onAlertClick, onMenuClick }: MainHeaderProps) => {
  return (
    <header className="flex justify-between p-2 fixed top-0 left-0 right-0 mx-auto max-w-[640px] bg-white h-[56px]">
      <Link to={paths.app.jobPosts.getHref()}>
        <img src={logo} width="140px" />
      </Link>
      <div className="flex items-center">
        {user && (
          <button onClick={onAlertClick}>
            <img src={bell} className="p-2" />
          </button>
        )}
        <button onClick={onMenuClick}>
          <img src={menu} className="p-2" />
        </button>
      </div>
    </header>
  );
};

export { MainHeader };
