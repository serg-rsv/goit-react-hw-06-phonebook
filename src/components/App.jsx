import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from 'styles/GlobalStyle';
import { TitleMain, TitleSecond } from 'styles/Titles.styled';
import { Section } from 'styles/Section.styled';

export const App = () => {
  const items = useSelector(state => state.contacts.items);

  return (
    <Section>
      <GlobalStyle />
      <TitleMain>Phonebook</TitleMain>
      <ContactForm />
      <TitleSecond>Contacts</TitleSecond>
      <Filter />
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p className="message">Contacts list is empty</p>
      )}
    </Section>
  );
};
