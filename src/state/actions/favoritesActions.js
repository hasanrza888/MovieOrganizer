import { SEBETE_AT } from "../action-types"




const sendFavorite=(film)=>{

    return(dispatch1)=>{
        dispatch1({
            type: SEBETE_AT,
            payload: film
        })
    }
}

export default sendFavorite