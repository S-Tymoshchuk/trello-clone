import {combineReducers, createStore} from "redux";
import listReducer from "../reducers/reduser-list";
import appBarStatus from "../reducers/reducer-appbar-status";
import budgetReducer from "../reducers/reducer-budget";


let reducers = combineReducers({
    lists: listReducer,
    appBar: appBarStatus,
    budget: budgetReducer
});

const store = createStore(reducers);

export default store;