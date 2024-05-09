import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import css from './LoginForm.module.css';
import LoginRegistrationImage from '../LoginRegistrationImage/LoginRegistrationImage';
import { LuUser2 } from "react-icons/lu";
import { CiLock } from "react-icons/ci";

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ onLogin }) => 
  <div className={css.formContainer}>
     <LoginRegistrationImage />
    <h1>Login</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios.post('https://connections-api.herokuapp.com/users/login', values)
          .then(response => {
            toast.success('Login successful');
            onLogin(response.data);
            resetForm();
            setSubmitting(false);
          })
          .catch(error => {
            toast.error(error.response?.data?.message || 'Login failed due to server error');
            setSubmitting(false);
          });
        }}>
      {({ isSubmitting }) => (
        <Form>
          <div className={css.inputGroup}>
            <LuUser2 className={css.icon} size={20}/>
            <Field name="email" type="email" placeholder="Email" className={css.inputField} />
          </div>
          <ErrorMessage name="email" component="div" className={css.error} />

          <div className={css.inputGroup}>
            <CiLock className={css.icon}  size={20} />
            <Field name="password" type="password" placeholder="Password" className={css.inputField} />
          </div>
          <ErrorMessage name="password" component="div" className={css.error} />

          <button type="submit" className={css.button} disabled={isSubmitting}>Login</button>
        </Form>
      )}
    </Formik>
  </div>

export default LoginForm;
