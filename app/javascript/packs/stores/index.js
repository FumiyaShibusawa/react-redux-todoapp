import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers"
import App from "../components/App"
import { addTodoList } from "../actions/TodoListActions"


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
const todolist_root = document.getElementById("todolist-root")
if (todolist_root) {
  render(
    <Provider store={ store }>
      <App />
    </Provider>,
    todolist_root
  )
}
