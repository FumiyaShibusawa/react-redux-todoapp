import * as React from "react"
import { render } from "react-dom"
import Todo from "../components/Todo"
import TodoList from "../components/TodoList"

const todolist_root = document.getElementById("todolist-root");
if (todolist_root) {
  render(
    <div className="todolist_container">
      <TodoList todolist_name="TodoListだよ" status="open" />
      <Todo todo_name="Todoだよ" status="open" />
    </div>,
    todolist_root
  )
};
