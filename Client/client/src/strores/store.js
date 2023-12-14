import {
    legacy_createStore as createStore,
    compose,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer.js";

const reducer = combineReducers({
    todos: rootReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
