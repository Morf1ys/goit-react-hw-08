// src/components/EditContactModal.js
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EditContactModal = ({ isOpen, onRequestClose, contact, onSave }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, number });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Contact"
    >
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Save Changes</button>
        <button onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default EditContactModal;
