import {
  SET_LOADING,
  ADD_DEFAULT_POKEMON_DATA,
  SET_RANDOM_POKEMON_DATA,
} from 'store/action-types';

export const setLoading = loading => ({
  loading,
  type: SET_LOADING,
});

export const addDefaultPokemonData = pokemonData => ({
  pokemonData,
  type: ADD_DEFAULT_POKEMON_DATA,
});

export const setRandomPokemonData = pokemonData => ({
  pokemonData,
  type: SET_RANDOM_POKEMON_DATA,
});
