
import Modal from 'react-modal';
import css from './ConfirmDeleteModal.module.css';
Modal.setAppElement('#root');

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onDelete }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Confirm Delete"
            className={css["modal-content"]}
          overlayClassName={css["modal-overlay"]}
          
    >
      <h2>Are you sure you want to delete this contact?</h2>
      <button onClick={onDelete}>Yes, Delete</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default ConfirmDeleteModal;
