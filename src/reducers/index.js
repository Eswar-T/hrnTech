import { combineReducers } from "redux";
import fetchUsersList from './fetchUsersList';


const rootReducer = combineReducers({
    usersList : fetchUsersList
})

export default rootReducer;