import { createStore } from 'redux';
import reducer from 'store/reducer';

export const initialState = {
  loading: true,
};

export const store = createStore(reducer, initialState);
