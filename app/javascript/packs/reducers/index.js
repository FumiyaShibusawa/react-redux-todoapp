import { combineReducers } from "redux"
import todolists from "./todolistReducer"

const rootReducer = combineReducers({
  todolists
})

export default rootReducer
