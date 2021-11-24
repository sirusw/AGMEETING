import { createStore } from "redux";
import userReducer from "./reducers"

const initialState ={
    userList:{},
    currentUser:{
        username: ""
    }
}

export default createStore(userReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())