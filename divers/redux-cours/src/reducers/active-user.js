const activeUser = (state = null, action) => {
  switch(action.type) {
    case 'USER_SELECTED': 
      return action.user;
      
    case 'CHANGE_NAME': 
      return {
        ...state,
        name: action.value,
      }
    default: 
      return state;
  }
}

export default activeUser;