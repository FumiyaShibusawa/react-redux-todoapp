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

const addTodoSuccess = (todo_lists) => ({
  type: "ADD_TODO",
  todo_lists: todo_lists
})
const addTodoFailed = (todo_lists) => ({
  type: "ADD_TODO_FAILED",
  todo_lists: todo_lists
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

const updateTodoSuccess = (todo_lists) => ({
  type: "UPDATE_TODO",
  todo_lists: todo_lists
})
const updateTodoFailed = (todo_lists) => ({
  type: "UPDATE_TODO_FAILED",
  todo_lists: todo_lists
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

const deleteTodoSuccess = (todo_lists) => ({
  type: "DELETE_TODO",
  todo_lists: todo_lists
})
const deleteTodoFailed = (todo_lists) => ({
  type: "DELETE_TODO_FAILED",
  todo_lists: todo_lists
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

const completeTodoSuccess = (todo_lists) => ({
  type: "COMPLETE_TODO",
  todo_lists: todo_lists
})
const completeTodoFailed = (todo_lists) => ({
  type: "COMPLETE_TODO_FAILED",
  todo_lists: todo_lists
})
