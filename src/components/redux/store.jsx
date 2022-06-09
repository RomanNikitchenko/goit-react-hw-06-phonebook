import { legacy_createStore } from 'redux';

const reducet = (state = {}, action) => {
  return state;
};

const store = legacy_createStore(reducet);

export default store;
