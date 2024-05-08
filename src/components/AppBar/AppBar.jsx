import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';

import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/auth/operations'; // Переконайтесь, що ви імпортували дію logout правильно

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/'); // Редирект на головну сторінку після логауту
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/contacts">Contacts</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link> {/* Додав посилання на логін */}
          </>
        )}
      </nav>
    </header>
  );
};

export default AppBar;

