import { combineReducers } from "redux";

const userReducer= (state = {}, action)=> {
    switch(action.type){
        case 'CREATE_NEW_USER':
            state.userList[action.payload.username] = action.payload.password
        case 'STORE_USER':
            state.currentUser = action.payload
        default:
            return state;
    }
};

export default userReducer