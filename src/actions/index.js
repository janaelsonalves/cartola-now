import {
  REQUEST_DATA,
  RECEIVE_DATA,
  CATCH_FAILURE
} from "../constants/actionTypes";
import Axios from "axios";

const apiUri = "/cartola/atletas/mercado";

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

export const catchFailure = error => ({
  type: CATCH_FAILURE,
  error
});

export const requestData = () => ({
  type: REQUEST_DATA
});

export const fetchData = () => dispatch => {
  dispatch(requestData());
  Axios.get(apiUri)
    .then(res => dispatch(receiveData(res.data)))
    .catch(err => dispatch(catchFailure(err)));
};
