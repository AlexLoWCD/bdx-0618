const defaultState = [{
  id: 1,
  name: 'John',
  lastname: 'Doe'
}, {
  id: 2,
  name: 'Marie',
  lastname: 'Check'
}, {
  id: 3,
  name: 'Pascal',
  lastname: 'Le grand frère'
}];


const users = (state = defaultState, action) => {
  switch(action.type) {
    case 'CHANGE_NAME': 
      const newState = state.map(user => {
        if (user.id === action.id) {
          return {
            ...user,
            name: action.value,
          }
        }
        return { ...user };
      });
      return newState;
    default: 
      return state;
  }
};

export default users;