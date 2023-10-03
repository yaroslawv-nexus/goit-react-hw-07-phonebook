import { useDispatch } from 'react-redux';
import { ContactItemStyle } from './Contact.styled';
import { deleteContact } from 'redux/asyncRedax';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemStyle>
      <h3>{contact.name}</h3> <p>{contact.phone}</p>
      {'  '}
      <button
        onClick={e => dispatch(deleteContact(e.target.id))}
        id={contact.id}
      >
        Delete
      </button>
    </ContactItemStyle>
  );
};
