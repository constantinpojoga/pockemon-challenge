import { API_URL } from 'shared/constants';

export function handleFetchError(response) {
  if (!response.ok) throw Error(response.statusText);

  return response;
}

export async function fetchPokemon(id) {
  let response = await fetch(`${API_URL}/${id}`);
  let data = await response.json();

  return data;
}
