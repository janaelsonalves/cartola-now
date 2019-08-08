import {
  REQUEST_DATA,
  RECEIVE_DATA,
  CATCH_FAILURE
} from "../constants/actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: null
};

const cartolaReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_DATA:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case CATCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default cartolaReducer;
