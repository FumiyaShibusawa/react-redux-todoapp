import { requestAPI } from "../API/requestAPI";

export const addTodo = (value, todo_list_id) => {
  return requestAPI(
    "/todos",
    "POST",
    { todo: { name: value, todo_list_id: todo_list_id } },
    addTodoSuccess,
    addTodoFailed
  );
}

const addTodoSuccess = (todos) => ({
  type: "ADD_TODO",
  todos: todos
})
const addTodoFailed = (todos) => ({
  type: "ADD_TODO_FAILED",
  todos: todos
})


export const updateTodo = (todo, value, todo_list_id) => {
  return requestAPI(
    `/todos/${todo._id["$oid"]}`,
    "PATCH",
    { todo: { name: value, todo_list_id: todo_list_id } },
    updateTodoSuccess,
    updateTodoFailed
  );
}

const updateTodoSuccess = (todos) => ({
  type: "UPDATE_TODO",
  todos: todos
})
const updateTodoFailed = (todos) => ({
  type: "UPDATE_TODO_FAILED",
  todos: todos
})


export const showTodos = (todo_list) => ({
  type: "SHOW_TODOS",
  todo_list_name: todo_list.name,
  todos: todo_list.todos
})


export const deleteTodo = (todo, todo_list_id) => {
  return requestAPI(
    `/todos/${todo._id["$oid"]}`,
    "DELETE",
    { todo: { todo_list_id: todo_list_id } },
    deleteTodoSuccess,
    deleteTodoFailed
  );
}

const deleteTodoSuccess = (todos) => ({
  type: "DELETE_TODO",
  todos: todos
})
const deleteTodoFailed = (todos) => ({
  type: "DELETE_TODO_FAILED",
  todos: todos
})

export const completeTodo = (todo, todo_list_id) => {
  return requestAPI(
    `/todos/${todo._id["$oid"]}`,
    "PATCH",
    { todo: { completed: !todo.completed, todo_list_id: todo_list_id } },
    completeTodoSuccess,
    completeTodoFailed
  );
}

const completeTodoSuccess = (todos) => ({
  type: "COMPLETE_TODO",
  todos: todos
})
const completeTodoFailed = (todos) => ({
  type: "COMPLETE_TODO_FAILED",
  todos: todos
})
