import Navbar from './Navbar';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <header>
      <div className="nav-area" style={{display: 'flex', justifyContent : 'space-between'}}>
        <Navbar />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;