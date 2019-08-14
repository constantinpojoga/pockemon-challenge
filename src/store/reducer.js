import {
  SET_LOADING,
} from 'store/action-types';

const reducer = (state = {}, action) => {
  if (typeof action === 'undefined') return state;

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
