import logo from '@/assets/logo.png';
import bell from '@/assets/icons/bell.svg';
import menu from '@/assets/icons/menu.svg';
import { Link } from 'react-router';
import { paths } from '@/config/paths';

interface IUser {
  name: string;
}
interface HeaderProps {
  user?: IUser;
  onClickAlert: () => void;
  onClickMenu: () => void;
}
const Header = ({ user, onClickAlert, onClickMenu }: HeaderProps) => {
  return (
    <header className="flex justify-between p-2 fixed top-0 left-0 right-0 mx-auto max-w-[640px] bg-white">
      <Link to={paths.app.jobPosts.getHref()}>
        <img src={logo} width="140px" />
      </Link>
      <div className="flex items-center">
        {user && (
          <button onClick={onClickAlert}>
            <img src={bell} className="p-2" />
          </button>
        )}
        <button onClick={onClickMenu}>
          <img src={menu} className="p-2" />
        </button>
      </div>
    </header>
  );
};

export { Header };
