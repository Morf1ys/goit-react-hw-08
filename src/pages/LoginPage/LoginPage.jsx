import LoginForm from '../../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = (userData) => {
        // Тут можна зберігати userData у стані застосунку, використовуючи Redux або Context API
        console.log('User logged in:', userData);
        navigate('/contacts'); // Редирект після успішного логіну
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onLogin={handleLoginSuccess} />
        </div>
    );
};

export default LoginPage;
