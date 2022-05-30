import { APIDEN_AL } from "../action-types";

const apiDataContainer = {
    data: []
}

function apidenGelenDataReducer(state = apiDataContainer, action) {
    switch(action.type){

        case APIDEN_AL:

        // return [...state, action.payload];
        return {...state, data:action.payload};

        default:
            return state
    }
}

export default apidenGelenDataReducer;