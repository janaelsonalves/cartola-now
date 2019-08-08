const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios").default;

const initialState = {
  todos: [
    { id: 1, title: "Redux", completed: true },
    { id: 2, title: "React", completed: false }
  ]
};

const ADD_TODO = "ADD_TODO";

const GET_TODO = "GET_TODO";

const FILTER_TODO = "FILTER_TODO";

const addTodo = todo => ({ type: ADD_TODO, todo });

const getTodo = id => ({ type: GET_TODO, id });

const filterTodo = filter => ({ type: FILTER_TODO, filter });

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.todo]
      });
    case GET_TODO:
      return state.todos.find(todo => todo.id == action.id);
    case FILTER_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(
          todo =>
            todo.titletoLowerCase().indexOf(action.filter.toLowerCase()) > -1
        )
      });
    default:
      return state;
  }
};

const RECEIVE_DATA = "REQUEST_DATA_SUCESS";
const CATCH_FAILURE = "REQUEST_DATA_FAILURE";
const REQUEST_DATA = "REQUEST_DATA_STARTED";

const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

const catchFailure = error => ({
  type: CATCH_FAILURE,
  error
});

const requestData = () => ({
  type: REQUEST_DATA
});

const fetchData = () => dispatch => {
  dispatch(requestData());
  axios
    .get("http://localhost:4000/api/cartola")
    .then(res => dispatch(receiveData(res.data)))
    .catch(err => dispatch(catchFailure(err)));
};

const cartolaState = {
  loading: false,
  data: {},
  error: null
};

const cartolaReducer = (state = cartolaState, action) => {
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

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(cartolaReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("Store: " + JSON.stringify(store.getState()) + "\n");
});

store.dispatch(fetchData());

let todo = { id: 3, title: "Vue JS", completed: false };
store.dispatch(addTodo(todo));

todo = { id: 4, title: "Angular", completed: false };
store.dispatch(addTodo(todo));

store.dispatch(getTodo(2));
// store.dispatch(filterTodo("ng"));

// result = initialState.todos.filter(
//   todo => todo.title.toLowerCase().indexOf("e".toLowerCase()) > -1
// );

// console.log("Result: " + JSON.stringify(result));
// store.dispatch(addTodo({ title: "Anything" }));
// store.dispatch(addTodo({ title: "Anything" }));
// store.dispatch(addTodo({ title: "Anything" }));
