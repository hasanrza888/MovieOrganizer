import { APIDEN_AL } from "../action-types"



const apidenGelenData =(data)=>{
    return(dispatch4)=>{
        dispatch4({
            type: APIDEN_AL,
            payload: data
        })
    }
}

export default apidenGelenData;