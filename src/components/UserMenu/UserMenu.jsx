import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!user) {
    return null; 
  }

  return (
    <div className={css.userMenu}>
      <span className={css.userName}>Welcome, {user.name}!</span>
      <button className={css.logoutButton} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
