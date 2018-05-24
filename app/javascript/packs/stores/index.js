import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "../reducers"
import App from "../components/App"
import { addTodoList } from "../actions/TodoListActions"


const store = createStore(rootReducer)
const listen = store.subscribe(() =>
  console.log(store.getState())
)
const todolist_root = document.getElementById("todolist-root")
if (todolist_root) {
  render(
    <Provider store={ store }>
      <App />
    </Provider>,
    todolist_root
  )
}
