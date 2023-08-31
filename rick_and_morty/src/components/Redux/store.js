import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore (reducer, applyMiddleware(thunk));