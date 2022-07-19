import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from 'styles/GlobalStyle';
import { TitleMain, TitleSecond } from 'styles/Titles.styled';
import { Section } from 'styles/Section.styled';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    setContacts(prev => {
      return [...contacts, { id: nanoid(), name, number }];
    });
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = e => setFilter(e.currentTarget.value);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  const names = contacts.map(contact => contact.name);

  return (
    <Section>
      <GlobalStyle />
      <TitleMain>Phonebook</TitleMain>
      <ContactForm addContact={addContact} contacts={names} />
      <TitleSecond>Contacts</TitleSecond>
      <Filter filter={filter} onChange={handleFilterChange} />
      {contacts.length > 0 ? (
        <ContactList contacts={filteredContacts} onDelete={removeContact} />
      ) : (
        <p className="message">Contacts list is empty</p>
      )}
    </Section>
  );
};
