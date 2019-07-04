import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "./middleware/thunk-middleware";
import characterReducer from "./starwars-reducer";

const reducer = combineReducers({
  characters: characterReducer
});

export default () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
