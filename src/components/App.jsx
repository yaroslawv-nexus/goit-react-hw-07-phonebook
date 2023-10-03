import React from 'react';
import { CreateContactForm } from './ContactForm/CreateContactForm';
import { ContactList } from './ContactsLIst/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <CreateContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
