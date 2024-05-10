import Modal from 'react-modal';
import css from './ConfirmDeleteModal.module.css';
import { PiSmileyXEyesDuotone } from "react-icons/pi";
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
        <div className={css.txt}>
          <h2>Are you sure you want to delete this contact?</h2>
          <PiSmileyXEyesDuotone className={css.icon} size={100} />
        </div>
        <div className={css['btn-cont']}>
          <button className={css['btn-ok']} onClick={onDelete}>Yes, Delete</button>
          <button className={css['btn-no']} onClick={onRequestClose}>Cancel</button>
        </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
