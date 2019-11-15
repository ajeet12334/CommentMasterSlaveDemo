import {FETCH_INIT,FETCH_SUCCESS,FETCH_FAILURE} from '../actions/CommentActions'

const commentReducers = (state, action) => {
    switch (action.type) {
      case FETCH_INIT:
        return {
          ...state,
          isLoading: true,
          hasError: false
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          hasError: false,
          comments: action.payload,
        };
      case FETCH_FAILURE:
        return {
          ...state,
          isLoading: false,
          hasError: true,
        };
      default:
        return {
            ...state
        }
    }
  };

  export default commentReducers;