import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { List } from './List.styled';

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.contactName.toLowerCase().includes(normalizeFilter)
  );

  return (
    <List>
      {filteredContacts.map(({ id, contactName, phoneNumber }) => {
        return (
          <Contact key={id} id={id} name={contactName} number={phoneNumber} />
        );
      })}
    </List>
  );
};
