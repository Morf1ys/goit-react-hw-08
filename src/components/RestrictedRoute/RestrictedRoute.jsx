
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return Component ? <Component /> : <Outlet />;
};

export default RestrictedRoute;
