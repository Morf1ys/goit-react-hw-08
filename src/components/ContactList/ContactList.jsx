import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contacts/contactsSlice';
import css from './ContactList.module.css';
import { RotatingLines } from 'react-loader-spinner';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (isLoading) return (
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );

  if (error) return <p>Error: {error}</p>; 

  return (
    <ul className={css['list-cont']}>
      {contacts.length > 0 ? contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      )) : <p>Контактів не знайдено</p>}
    </ul>
  );
};

export default ContactList;
