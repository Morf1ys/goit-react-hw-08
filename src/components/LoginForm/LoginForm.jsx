import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import LoginRegistrationImage from '../LoginRegistrationImage/LoginRegistrationImage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={css.formContainer}>
     <LoginRegistrationImage />
     <h1>Login</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={loginSchema}
       onSubmit={(values, { setSubmitting }) => {
         dispatch(login(values))
           .then((response) => {
             toast.success('Login successful');
             navigate('/contacts');
             setSubmitting(false);
           })
           .catch((error) => {
             toast.error('Login failed: ' + (error.response?.data?.message || 'Server error'));
             setSubmitting(false);
           });
       }}
     >
        {({ isSubmitting }) => (
       <Form>
          <div className={css.inputGroup}>
            <FaEnvelope className={css.icon} />
            <Field name="email" type="email" placeholder="Email" className={css.inputField} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.inputGroup}>
            <FaLock className={css.icon} />
            <Field name="password" type="password" placeholder="Password" className={css.inputField} />
            <ErrorMessage name="password" component="div" className={css.error} />
          </div>

          <button type="submit" className={css.button} disabled={isSubmitting}>Login</button>
        </Form>
      )}
    </Formik>
    
  </div>
  );
};

export default LoginForm;
