import PropTypes from 'prop-types';
import { Button, NameLabel, FormContainer, Input, Error } from './Form.styled';
import { v4 as uuidv4 } from 'uuid';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(1).max(20).required(),
  number: Yup.string().min(3).max(12).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const Forma = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const newContact = { name, number, id: uuidv4() };
    onAddContact(newContact, name);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <label>
          <NameLabel>Name</NameLabel>
          <Input type="text" name="name" />
          <Error component="div" name="name" />
        </label>
        <label>
          <NameLabel>Namber</NameLabel>
          <Input type="tel" name="number" />
          <Error component="div" name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};

Form.propTypes = {
  onAddContact: PropTypes.func,
};
