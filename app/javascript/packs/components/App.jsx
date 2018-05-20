import * as React from "react"
import { render } from "react-dom"
import Todo from "../components/Todo"
import TodoList from "../components/TodoList"

const todolist_root = document.getElementById("todolist-root");
if (todolist_root) {
  render(
    <div className="todolist_container">
      <TodoList />
      <Todo />
    </div>,
    todolist_root
  )
};
