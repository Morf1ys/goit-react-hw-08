import LoginForm from '../../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';  


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginSuccess = (userData) => {
        // Цей рядок викликає setUser для оновлення стану в Redux
        dispatch(setUser({ user: userData.user, token: userData.token }));
        // Редирект на сторінку контактів
        navigate('/contacts');
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onLogin={handleLoginSuccess} />
        </div>
    );
};

export default LoginPage;
