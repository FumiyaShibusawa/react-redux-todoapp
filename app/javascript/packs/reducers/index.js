import { combineReducers } from "redux"
import todolists from "./todolistReducer"
import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({
  todolists
})

export default rootReducer
