import { createStore } from "redux";

const initialState ={
    currentUser:{
        username: ""
    }
}

const rootReducer = (state = initialState, action)=> {
    switch(action.type){
        case 'STORE_USER':
            initialState.currentUser = action.payload
        default:
            return state;
    }
};

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())