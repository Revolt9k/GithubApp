import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import mainPageReducer from "./mainPageReducer";


let reducers = combineReducers({
    mainPage: mainPageReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store
