
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ onLogin }) => 
  
  
  <Formik
  initialValues={{ email: '', password: '' }}
  validationSchema={loginSchema}
  onSubmit={(values, { setSubmitting, resetForm }) => {
    axios.post('https://connections-api.herokuapp.com/users/login', values)
      .then(response => {
        console.log('Login successful:', response.data); // Відладка успішної відповіді
        toast.success('Login successful');
        onLogin(response.data); // Обробка успішного логіну
        console.log('After onLogin'); // Перевірка чи виконується код після onLogin
        resetForm();
        setSubmitting(false);
      })
      .catch(error => {
        console.log('Error occurred:', error); // Відладка помилки
        const errorMessage = error.response && error.response.data ? error.response.data.message : 'Login failed due to server error';
        toast.error(errorMessage);
        setSubmitting(false);
      });
    
    }}>
    
  {({ isSubmitting }) => (
    <Form>
      <Field name="email" type="email" placeholder="Email" />
      <ErrorMessage name="email" component="div" />

      <Field name="password" type="password" placeholder="Password" />
      <ErrorMessage name="password" component="div" />

      <button type="submit" disabled={isSubmitting}>Login</button>
    </Form>
  )}
</Formik>



export default LoginForm;

