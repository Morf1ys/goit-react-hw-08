import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import css from './EditContactModal.module.css';

Modal.setAppElement('#root');

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Ім\'я повинне містити щонайменше 3 символи').required('Це поле є обов\'язковим'),
  number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Номер повинен мати формат 123-45-67').required('Це поле є обов\'язковим')
});

const EditContactModal = ({ isOpen, onRequestClose, contact, onSave }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      contentLabel="Edit Contact"
    >
      <h2>Edit Contact</h2>
      <Formik
        initialValues={{ name: contact.name, number: contact.number }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSave(values);
          setSubmitting(false);
          onRequestClose();
        }}
      >
        <Form className={css['cont-form-edit']}>
          <div className={css['cont-inp']}>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className={css['input-edit']} />
          <ErrorMessage name="name" component="div" className={css.error} />

          <label htmlFor="number" >Number:</label>
          <Field name="number"  >
            {({ field }) => (
              <InputMask
                {...field}
                mask="999-99-99"
                placeholder="123-45-67"
                type="text"
                className={css['input-edit']}
              />
            )}
          </Field>
            <ErrorMessage name="number" component="div" className={css.error} />
            </div>
          <div className={css['cont-btn-edit']}>
            <button type="submit" className={css.modalButton}>Save Changes</button>
            <button type="button" className={css.modalButtonCancel} onClick={onRequestClose}>Cancel</button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default EditContactModal;
