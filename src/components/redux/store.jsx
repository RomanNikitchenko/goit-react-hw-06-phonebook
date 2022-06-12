import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';

// console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development', //включение devTools при разработке
});

export default store;
