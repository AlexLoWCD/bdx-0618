const initialState = {
  list: [],
  loading: false,
  error: null,
};

const games = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_GAMES_SUCCESS':
      return {
        loading: false,
        error: null,
        list: action.games,
      };
    case 'FETCH_GAMES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: 
      return state;
  }
};

export default games;