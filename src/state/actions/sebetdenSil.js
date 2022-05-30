import { SEBETDEN_SIL } from "../action-types"

const sebetdenSil=(imdbID)=>{

    return(dispatch3)=>{
        dispatch3({
            type: SEBETDEN_SIL,
            payload: imdbID
        })
    }
}

export default sebetdenSil
