export const toggleVisited = id => ({
  type: 'TOGGLE_VISITED',
  id
});

export const updateVilles = (id, villes) => ({
  type: 'UPDATE_VILLES',
  id,
  villes,
});