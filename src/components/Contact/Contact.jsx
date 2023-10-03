import { useDispatch } from 'react-redux';
import { ContactItemStyle } from './Contact.styled';
import { removeContactSlice } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemStyle>
      <h3>{contact.name}</h3> <p>{contact.number}</p>
      {'  '}
      <button
        onClick={e => dispatch(removeContactSlice(e.target.id))}
        id={contact.id}
      >
        Delete
      </button>
    </ContactItemStyle>
  );
};
