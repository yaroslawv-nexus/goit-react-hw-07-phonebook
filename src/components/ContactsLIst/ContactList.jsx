import { Contact } from 'components/Contact/Contact';
import { ContactListStyle } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterByName = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ContactListStyle>
        {filterByName().map(element => {
          return <Contact key={element.id} contact={element} />;
        })}
      </ContactListStyle>
    </div>
  );
};
