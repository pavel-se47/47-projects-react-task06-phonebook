import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const createContact = createAction('contact/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');

const filterContact = createAction('contact/filter');

// eslint-disable-next-line
export default {
  createContact,
  deleteContact,
  filterContact,
};
