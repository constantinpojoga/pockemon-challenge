import { createStore } from 'redux';
import reducer from 'store/reducer';

export const initialState = {
  loading: false,
  defaultPokemonIds: [7, 4, 1],
  pokemonData: [],
  defaultPokemonData: [],
};

export const store = createStore(reducer, initialState);
