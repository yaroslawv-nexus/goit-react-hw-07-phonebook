import { Contact } from 'components/Contact/Contact';
import { ContactListStyle } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);

  return (
    <div>
      <ContactListStyle>
        {contacts.map(element => {
          return <Contact key={element.id} contact={element} />;
        })}
      </ContactListStyle>
    </div>
  );
};
