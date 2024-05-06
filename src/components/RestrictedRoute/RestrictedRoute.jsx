
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RestrictedRoute = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // Якщо користувач залогінений, редиректимо на головну сторінку або іншу сторінку
  return isLoggedIn ? <Navigate to="/contacts" replace /> : <Outlet />;
};

export default RestrictedRoute;
