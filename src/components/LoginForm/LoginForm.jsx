import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ onLogin }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={loginSchema}
    onSubmit={(values, { setSubmitting }) => {
      axios.post('https://your-api-url.com/users/login', values)
        .then(response => {
          toast.success('Login successful');
          onLogin(response.data); // Handle login success
          setSubmitting(false);
        })
        .catch(error => {
          toast.error(`Login failed: ${error.response.data.message}`);
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

export default LoginForm;

