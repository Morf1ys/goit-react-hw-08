import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const registrationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = ({ onRegister }) => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validationSchema={registrationSchema}
    onSubmit={(values, { setSubmitting }) => {
      axios.post('https://your-api-url.com/users/signup', values)
        .then(response => {
          toast.success('Registration successful');
          onRegister(response.data);
          setSubmitting(false);
        })
        .catch(error => {
          toast.error(`Registration failed: ${error.response.data.message}`);
          setSubmitting(false);
        });
    }}
  >
   <Form>
      <Field name="name" type="text" placeholder="Name" />
      <ErrorMessage name="name" component="div" />

      <Field name="email" type="email" placeholder="Email" />
      <ErrorMessage name="email" component="div" />

      <Field name="password" type="password" placeholder="Password" />
      <ErrorMessage name="password" component="div" />

      <button type="submit">Register</button>
    </Form>
  </Formik>
);

export default RegistrationForm;
