import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            } />
            <Route path="/login" element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            } />
            <Route path="/contacts" element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;


// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from './redux/contactsOps';

// import css from './index.module.css';
// import ContactForm from './components/ContactForm/ContactForm.jsx';
// import ContactList from './components/ContactList/ContactList.jsx'; 
// import SearchBox from './components/SearchBox/SearchBox.jsx';

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css['cont-main']}>
//         <div>
//         <h1 className={css.titletxt}>Phonebook</h1>
//         <ContactForm />
//       </div>
//       <div>
//       <SearchBox />
//         <ContactList />
//         </div>
//     </div>
//   );
// }

