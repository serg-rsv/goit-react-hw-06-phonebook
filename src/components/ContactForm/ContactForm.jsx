import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/contacts-action';
import { useState } from 'react';
import { Form } from './Form.styled';
import { Button } from 'styles/Button.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        console.log('Wrong field name');
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizeName = name.toLowerCase();
    const isExist = contacts
      .map(contact => contact.contactName)
      .some(contactName => contactName.toLowerCase() === normalizeName);

    if (isExist) {
      alert(`${name} is already in contacts.`);

      return;
    }

    dispatch(addItem(name, number));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
