import {combineReducers, createStore} from "redux";
import listReducer from "../reducers/reduser-list";


let reducers = combineReducers({
    lists: listReducer
});

const store = createStore(reducers);

export default store;