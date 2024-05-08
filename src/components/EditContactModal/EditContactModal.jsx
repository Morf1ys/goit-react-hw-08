import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from 'react-modal';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

Modal.setAppElement('#root');

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Ім\'я повинне містити щонайменше 3 символи')
    .required('Це поле є обов\'язковим'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Номер повинен мати формат 123-45-67')
    .required('Це поле є обов\'язковим')
});

const EditContactModal = ({ isOpen, onRequestClose, contact, onSave }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
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
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />

          <label htmlFor="number">Номер:</label>
          <Field name="number">
            {({ field }) => (
              <InputMask
                {...field}
                mask="999-99-99"
                placeholder="123-45-67"
                type="text"
              />
            )}
          </Field>
          <ErrorMessage name="number" component="div" className="error" />

          <button type="submit">Save Changes</button>
          <button type="button" onClick={onRequestClose}>Cancel</button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default EditContactModal;
