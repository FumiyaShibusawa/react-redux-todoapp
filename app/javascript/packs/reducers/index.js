import { combineReducers } from "redux"
import todolists from "./todolistReducer"
import signup from "./signupReducer"
import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({
  todolists,
  signup
})

export default rootReducer
