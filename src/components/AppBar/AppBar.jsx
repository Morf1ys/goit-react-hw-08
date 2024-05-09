import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/auth/operations'; 
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/');
  };
  const linkActive = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : css.link;
};

  return (
    <header>
      <nav className= {css['nav-cont']}>
        <NavLink to="/"  className={linkActive}>Home</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts" className={linkActive} >Contacts</NavLink>
            <button onClick={handleLogout} className={`${css.link} ${css.button}`}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/register" className={linkActive}>Register</NavLink>
            <NavLink to="/login" className={linkActive}>Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default AppBar;



