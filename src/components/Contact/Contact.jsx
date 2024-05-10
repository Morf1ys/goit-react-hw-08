import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contactsOps';
import { FaUser, FaPhoneAlt, FaTrash, FaPencilAlt } from 'react-icons/fa';
import EditContactModal from '../EditContactModal/EditContactModal'; 
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import css from '../ContactList/ContactList.module.css';

const Contact = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setDeleteModalIsOpen(false); 
  };

  const handleEdit = () => {
    setModalIsOpen(true);
  };

  const handleSave = (updatedContact) => {
    dispatch(updateContact({ id: contact.id, contact: updatedContact }));
    setModalIsOpen(false);
  };

  return (
    <li className={css['list-item']}>
      <div className={css['contact-info']}>
      <p><FaUser /> {contact.name}</p>
        <p><FaPhoneAlt /> {contact.number}</p>
      </div>
      <div className={css['cont-btn-ed-del']}>
      <button onClick={handleEdit}className={css['btn-edit']}><FaPencilAlt size={14}/></button>
        <button onClick={() => setDeleteModalIsOpen(true)} className={css['btn-delete']}><FaTrash size={14} /></button>
        </div>
      <EditContactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contact={contact}
        onSave={handleSave}
      />
      <ConfirmDeleteModal
        isOpen={deleteModalIsOpen}
        onRequestClose={() => setDeleteModalIsOpen(false)}
        onDelete={handleDelete}
      />
    </li>
  );
};

export default Contact;

