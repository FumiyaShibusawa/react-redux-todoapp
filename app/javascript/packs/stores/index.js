import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers"
import App from "../components/App"
import Navigation from "../components/Navigation"
import NonAuth from "../components/NonAuth"
import { addTodoList } from "../actions/TodoListActions"


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
const todolist_root = document.getElementById("todolist-root")
if (todolist_root) {
  render(
    <Provider store={ store }>
      <div className={ localStorage.getItem("jwt") ? "" : "wall-paper" }>
        <Navigation/>
        <main className="wrapper">
          { localStorage.getItem("jwt") ?
            <App/> :
            <NonAuth/>
          }
        </main>
      </div>
    </Provider>,
    todolist_root
  )
}
