import LoginForm from '../../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';  
import css from '../../components/LoginForm/LoginForm.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginSuccess = (userData) => {
        dispatch(setUser({ user: userData.user, token: userData.token }));
        navigate('/contacts');
    };

    return (
        <div className={css['cont-Login-form-page']}>
            <LoginForm onLogin={handleLoginSuccess} />
        </div>
    );
};

export default LoginPage;
