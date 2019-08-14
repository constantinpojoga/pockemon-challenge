export function handleFetchError(response) {
  if (!response.ok) throw Error(response.statusText);

  return response;
}
