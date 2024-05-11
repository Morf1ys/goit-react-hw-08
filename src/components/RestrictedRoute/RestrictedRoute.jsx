import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return !isLoggedIn ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default RestrictedRoute;
