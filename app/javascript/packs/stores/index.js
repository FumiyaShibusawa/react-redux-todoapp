import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers"
import AuthContainer from "../containers/AuthContainer"


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
const todolist_root = document.getElementById("todolist-root")
if (todolist_root) {
  render(
    <Provider store={ store }>
      <AuthContainer/>
    </Provider>,
    todolist_root
  )
}
