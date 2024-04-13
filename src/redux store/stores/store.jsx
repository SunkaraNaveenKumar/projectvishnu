import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"
import { userAuthReducer } from "../reducers/authReducer";


const Store = legacy_createStore(combineReducers({
userAuthData:userAuthReducer
}),applyMiddleware(thunk))

export default Store