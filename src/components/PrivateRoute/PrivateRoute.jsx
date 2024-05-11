import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
