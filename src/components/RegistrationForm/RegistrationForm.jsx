import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css'; 
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; 
import LoginRegistrationImage from '../LoginRegistrationImage/LoginRegistrationImage';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const registrationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={css['cont-reg-form-page']}>
      <div className={css.formContainer}>
        <LoginRegistrationImage />
        <h1>Register</h1>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={registrationSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(register(values)).then(() => {
              toast.success('Registration successful');
              navigate('/login');
              setSubmitting(false);
            }).catch((error) => {
              toast.error('Registration failed: ' + error.message);
              setSubmitting(false);
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className={css.form}>
              <div className={css.inputGroup}>
                <FaUser className={css.icon} />
                <Field name="name" type="text" placeholder="Name" className={css.inputField} />
                <ErrorMessage name="name" component="div" className={css.error} />
              </div>

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

              <button type="submit" disabled={isSubmitting} className={css.button}>Register</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
