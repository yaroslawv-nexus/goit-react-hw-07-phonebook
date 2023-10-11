import React, { useEffect } from 'react';
import { CreateContactForm } from './ContactForm/CreateContactForm';
import { ContactList } from './ContactsLIst/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/asyncRedax';
import { selectError, selectLoad } from 'redux/selectors';
import BarLoader from 'react-spinners/BarLoader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoad);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <CreateContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <BarLoader color="#363bd7" />}
      <Filter />
      <ContactList />
    </Container>
  );
};
