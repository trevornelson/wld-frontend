
export function findIndexById(state, listLocator, searchTerm) {
  return state
    .getIn(listLocator)
    .findIndex(el => el.get('id') === searchTerm);
}
