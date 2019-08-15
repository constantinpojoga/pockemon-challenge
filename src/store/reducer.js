import {
  SET_LOADING,
  ADD_DEFAULT_POKEMON_DATA,
  SET_RANDOM_POKEMON_DATA,
} from 'store/action-types';

const reducer = (state = {}, action) => {
  if (typeof action === 'undefined') return state;

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case ADD_DEFAULT_POKEMON_DATA:
      return {
        ...state,
        defaultPokemonData: [...state.defaultPokemonData, action.pokemonData],
      };
    case SET_RANDOM_POKEMON_DATA:
      return {
        ...state,
        randomPokemonData: action.pokemonData,
      };
    default:
      return state;
  }
};

export default reducer;
