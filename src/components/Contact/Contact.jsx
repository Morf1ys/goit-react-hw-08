import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact, deleteContact } from '../../redux/contactsOps';
import { FaUser, FaPhoneAlt, FaTrash, FaPencilAlt } from 'react-icons/fa';
import css from '../ContactForm/ContactForm.module.css';

const Contact = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedNumber, setEditedNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateContact({ id: contact.id, name: editedName, number: editedNumber }));
    setIsEditing(false);
  };

  return (
    <li className={css['list-item']}>
      {isEditing ? (
        <div>
          <input type="text" value={editedName} onChange={e => setEditedName(e.target.value)} />
          <input type="text" value={editedNumber} onChange={e => setEditedNumber(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className={css['contact-info']}>
          <p><FaUser /> {contact.name}</p>
          <p><FaPhoneAlt /> {contact.number}</p>
          <button onClick={handleEdit}><FaPencilAlt /></button>
          <button onClick={handleDelete} className={css['btn-delete']}><FaTrash /></button>
        </div>
      )}
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
