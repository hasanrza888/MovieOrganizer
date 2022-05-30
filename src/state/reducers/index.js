import { combineReducers } from "redux";
import apidenGelenDataReducer from "./apidenGelenDataReducer";
import favoritesReducer from "./favoritesReducer";
import searchReducer from "./searchReducer";




const rootReducer = combineReducers({
    search: searchReducer,
    favorites: favoritesReducer,
    api: apidenGelenDataReducer
})

export default rootReducer;