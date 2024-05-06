import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/contacts">Contacts</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
