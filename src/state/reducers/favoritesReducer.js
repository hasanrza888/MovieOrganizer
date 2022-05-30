import { SEBETDEN_SIL, SEBETE_AT } from "../action-types";



const favoriteSebet = [];

function favoritesReducer(state = favoriteSebet, action){
    switch(action.type){
        case SEBETE_AT:
            let check = true;

            const chfunc = state.find(item=> item.imdbID === action.payload.imdbID)

            if(chfunc){
                check = false;
            }

            if(check){
              return[...state, action.payload]   
            }
        
        case SEBETDEN_SIL:
            const silinmis = state.filter(item=>item.imdbID !== action.payload);
            console.log(silinmis);
            return silinmis;
            
        default:
            return state;
    }
}

export default favoritesReducer