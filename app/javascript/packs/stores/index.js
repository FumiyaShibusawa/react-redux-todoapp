import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "../reducers"
import App from "../components/App"

const store = createStore(rootReducer)
const todolist_root = document.getElementById("todolist-root")
if (todolist_root) {
  render(
    <Provider store={ store }>
      <App />
    </Provider>,
    todolist_root
  )
}
