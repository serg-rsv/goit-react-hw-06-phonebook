import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addItem, deleteItem, filterItems } from './contacts-action';

const items = createReducer([], {
  [addItem]: (state, { payload }) => [...state, payload],
  [deleteItem]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterItems]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});
