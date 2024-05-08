// src/pages/ContactsPage.js
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
