
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Припускаємо, що ви зберігаєте статус входу в Redux

  // Якщо користувач не залогінений, перенаправляємо на сторінку логіну
  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Якщо користувач залогінений, рендеримо дочірні компоненти (Outlet)
  return <Outlet />;
};

export default PrivateRoute;
