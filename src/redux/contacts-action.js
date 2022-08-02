import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addItem = createAction(
  'contacts/addItem',
  (contactName, phoneNumber) => ({
    payload: {
      id: nanoid(),
      contactName,
      phoneNumber,
    },
  })
);
export const deleteItem = createAction('contacts/deleteItem');
export const filterItems = createAction('contacts/filterItems');
