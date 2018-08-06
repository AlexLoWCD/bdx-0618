export const selectUser = (user) => ({
  type: 'USER_SELECTED',
  user,
});

export const changeName = (id, value) => ({
  type: 'CHANGE_NAME',
  id,
  value,
});