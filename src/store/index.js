import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartolaReducer from "../reducers";

const store = createStore(cartolaReducer, applyMiddleware(thunk));

export default store;
