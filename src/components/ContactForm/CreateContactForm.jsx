import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorMess,
  FormStyle,
  FieldInputStyle,
  FieldSubmitStyle,
} from './CreateContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/asyncRedax';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter your name'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Invalid phone number format (+380XXXXXXXXX)')
    .required('Enter a phone number'),
});

export const CreateContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addContactPrev = contact => {
    if (checkDuplicate(contact)) {
      alert('the contact already exists');
      return;
    }
    dispatch(addContact(contact));
  };

  function checkDuplicate(contact) {
    return contacts.some(
      element => contact.name.toLowerCase() === element.name.toLowerCase()
    );
  }

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        addContactPrev(values);
      }}
    >
      <FormStyle>
        <label>
          Name <FieldInputStyle name="name" type="text" />
        </label>
        <ErrorMess name="name" component="span" />
        <label>
          Number <FieldInputStyle name="phone" type="tel" />
        </label>
        <ErrorMess name="phone" component="span" />
        <FieldSubmitStyle type="submit">Add Contact</FieldSubmitStyle>
      </FormStyle>
    </Formik>
  );
};
