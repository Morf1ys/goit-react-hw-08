import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import css from './AuthNav.module.css'; 

const AuthNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const linkActive = ({ isActive }) => isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <div className={css['cont-auth']}>
      {!isLoggedIn && (
        <>
        <NavLink to="/register" className={linkActive} >Register</NavLink>
        <NavLink to="/login" className={linkActive}>Login</NavLink>         
        </>
      )}
    </div>
  );
};

export default AuthNav;
