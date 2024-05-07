import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('https://connections-api.herokuapp.com/users/login', values)
          .then(response => {
            if (response && response.data) {
              toast.success('Login successful');
              onLogin(response.data); // Handle login success
              navigate('/contacts');
            } else {
              handleInvalidResponse(); // Handle invalid response
            }
          })
          .catch(error => {
            handleLoginError(error); // Handle login error
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      <Form>
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

const handleInvalidResponse = () => {
  toast.error('Invalid response format');
};

const handleLoginError = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    toast.error(`Login failed: ${error.response.data.message}`);
  } else {
    toast.error('An unexpected error occurred');
  }
};

export default LoginForm;
