
import ContactForm from '../../components/ContactForm/ContactForm'; // Переконайтеся, що шлях до компоненту вірний
import SearchBox from '../../components/SearchBox/SearchBox'; // Переконайтеся, що шлях до компоненту вірний
import ContactList from '../../components/ContactList/ContactList'; // Переконайтеся, що шлях до компоненту вірний
// import css from './ContactsPage.module.css'; 

const ContactsPage = () => {
  return (
    <div > 
      {/* className={css['cont-main']} */}
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
