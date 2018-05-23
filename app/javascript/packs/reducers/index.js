import { combineReducers } from "redux"
import todos from "./todoReducer"
import todolists from "./todolistReducer"

const rootReducer = combineReducers({
  todos,
  todolists
})

export default rootReducer
