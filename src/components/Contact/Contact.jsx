// src/components/Contact.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contactsOps';
import { FaUser, FaPhoneAlt, FaTrash, FaPencilAlt } from 'react-icons/fa';
import EditContactModal from '../EditContactModal/EditContactModal';  // Переконайтесь, що шлях до компонента правильний

const Contact = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setModalIsOpen(true);
  };

  const handleSave = (updatedContact) => {
    dispatch(updateContact({ id: contact.id, contact: updatedContact }));
    setModalIsOpen(false);
  };

  return (
    <li>
      <p><FaUser /> {contact.name}</p>
      <p><FaPhoneAlt /> {contact.number}</p>
      <button onClick={handleEdit}><FaPencilAlt /></button>
      <button onClick={handleDelete}><FaTrash /></button>
      <EditContactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contact={contact}
        onSave={handleSave}
      />
    </li>
  );
};

export default Contact;


// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contactsOps'; 
// import { FaUser, FaPhoneAlt, FaTrash } from 'react-icons/fa'; 
// import css from '../ContactList/ContactList.module.css';


// const Contact = ({ contact: { name, number, id } }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <li className={css['list-item']}>
//       <div className={css['contact-info']}>
//         <p><FaUser /> {name}</p>
//         <p><FaPhoneAlt /> {number}</p>
//       </div>
//       <button onClick={handleDelete} className={css['btn-delete']}>
//         <FaTrash size={14} />
//       </button>
//     </li>
//   );
// };
