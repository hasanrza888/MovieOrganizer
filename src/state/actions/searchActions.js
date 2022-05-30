import axios from "axios"
import { AXTAR } from "../action-types"

const getData = (inpresult)=>{
    return async(dispatch2)=>{

        try {

            let data = await axios.get(`http://www.omdbapi.com/?s=${inpresult}&apikey=7435ec8d`)

            // console.log(data.data.Search);

            dispatch2({
                type: AXTAR,
                payload:data.data.Search
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export default getData;