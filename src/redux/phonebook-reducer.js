import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';
import contacts from 'db';

const items = createReducer(contacts, {
  [actions.createContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (state, { payload }) => payload,
});

export default combineReducers({ items, filter });
