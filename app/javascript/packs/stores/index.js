import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers"
import NonAuth from "../components/NonAuth"
import TodoListContainer from "../containers/TodoListContainer"


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => console.log(store.getState()))
const nonAuthRoot = document.getElementById("non-auth-root")
const todoListRoot = document.getElementById("todolist-root")
if (nonAuthRoot) {
  render(
    <Provider store={ store }>
      <NonAuth/>
    </Provider>,
    nonAuthRoot
  )
} else if (todoListRoot) {
  render(
    <Provider store={ store }>
      <TodoListContainer/>
    </Provider>,
    todoListRoot
  )
}
