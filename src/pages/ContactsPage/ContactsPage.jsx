// src/pages/ContactsPage.js
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import css from './ContactsPage.module.css';
import BackgroundImage from '../../components/BackgroundImageContacts/BackgroundImageContacts';
const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css['cont-main-contact']}>
      <BackgroundImage />
      <div >
      <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
