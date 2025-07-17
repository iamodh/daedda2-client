import logo from '@/assets/logo.png';
import bell from '@/assets/icons/bell.svg';
import menu from '@/assets/icons/menu.svg';

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
      <img src={logo} width="140px" />
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
