
import ContactForm from '../../components/ContactForm/ContactForm'; 
import SearchBox from '../../components/SearchBox/SearchBox'; 
import ContactList from '../../components/ContactList/ContactList'; 
import css from './ContactsPage.module.css'; 
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';


const ContactsPage = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchContacts());
        }
    }, [dispatch, isLoggedIn]);

    return (
       <div className={css['cont-main']}> 
        <div>
        <h1 >Phonebook</h1>
         {/* className={css.titletxt} */}
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

