import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import notesReducer from "./reducer";

const rootReducer = combineReducers({
  notesReducer: notesReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
