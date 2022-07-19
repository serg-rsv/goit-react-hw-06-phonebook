import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from './Form.styled';
import { Button } from 'styles/Button.styled';

export const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    const isExist = contacts.some(
      contactName => contactName.toLowerCase() === normalizeName
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);

      return;
    }

    addContact({ name, number });

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

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
  addContact: PropTypes.func.isRequired,
};
