const initialState = {
  list: [],
  loading: false,
  error: null,
};

const platforms = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLATFORM_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_PLATFORM_SUCCESS':
      return {
        loading: false,
        error: null,
        list: action.platforms,
      };
    case 'FETCH_PLATFORM_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: 
      return state;
  }
};

export default platforms;