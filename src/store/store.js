import {combineReducers, createStore} from "redux";
import listReducer from "../reducers/reduser-list";
import appBarStatus from "../reducers/reducer-appbar-status";


let reducers = combineReducers({
    lists: listReducer,
    appBar: appBarStatus
});

const store = createStore(reducers);

export default store;