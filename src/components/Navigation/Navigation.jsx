import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const linkActive = ({ isActive }) => isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <nav className={css.hom}>
      <NavLink to="/" className={linkActive}>Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts" className={linkActive}>Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
