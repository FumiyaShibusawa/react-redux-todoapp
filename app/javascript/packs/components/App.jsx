import * as React from "react"
import TodoContainer from "../containers/TodoContainer"
import TodoListContainer from "../containers/TodoListContainer"

const App = () => (
  <div className="todolist_container">
    <TodoContainer />
    <TodoListContainer />
  </div>
)

export default App
