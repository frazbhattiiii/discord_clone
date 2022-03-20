import { composeWithDevTools } from "redux-devtools-extension";
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducers';
// we will add our all reducers to root Reducers
const rootReducer = combineReducers({
auth:authReducer,
})
// compose with devtools will help google devtools to have access
// thunk will allow us to make async calls in redux-store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
