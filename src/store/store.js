import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import counterReducer from "./reducer";

const rootReducer = combineReducers({
  notesReducer: counterReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
