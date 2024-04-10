import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import coupleReducer from "./reducer/coupleReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    dragonReducer: dragonReducer,
    knightReducer: knightReducer,
    coupleReducer: coupleReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
