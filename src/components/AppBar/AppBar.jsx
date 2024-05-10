import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu'; 
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation'; 
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  

  return (
    <header>
      <nav className={css['nav-cont']} >
        <Navigation />  
        {isLoggedIn ? (
          <UserMenu />  
        ) : (
          <AuthNav />  
        )}
      </nav>
    </header>
  );
};

export default AppBar;
