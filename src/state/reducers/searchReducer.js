import { AXTAR } from "../action-types";

const initialState = {
    data: [],
}

function searchReducer(state = initialState, action){

    switch(action.type){
        case AXTAR:
            return {
                ...state, data:action.payload
                
            }
        default:
            return state;
    }
}

export default searchReducer;

