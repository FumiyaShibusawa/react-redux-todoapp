export const addTodo = (todo, todo_list_id, index) => {
  return dispatch => {
    fetch("/todos.json", {
      method: "POST",
      body: JSON.stringify({ todo: { name: todo, todo_list_id: todo_list_id } }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(
      result => (dispatch(addTodoSuccess(result, todo_list_id, index))),
      error => (dispatch(addTodoFailed(error, todo_list_id, index)))
    )
  }
}

const addTodoSuccess = (todo, todo_list_id, index) => ({
  type: "ADD_TODO",
  todo: todo,
  todo_list_id: todo_list_id,
  index: index
})
const addTodoFailed = (todo, todo_list_id, index) => ({
  type: "ADD_TODO_FAILED",
  todo: todo,
  todo_list_id: todo_list_id,
  index: index
})


export const showTodos = (todo_list) => ({
  type: "SHOW_TODOS",
  todo_list_name: todo_list.name,
  todos: todo_list.todos
})


export const deleteTodo = (todo) => {
  return dispatch => {
    fetch(`/todos/${todo._id["$oid"]}.json`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(
      result => (dispatch(deleteTodoSuccess(result))),
      error => (dispatch(deleteTodoFailed(error)))
    )
  }
}

const deleteTodoSuccess = (todo) => ({
  type: "DELETE_TODO",
  todo: todo
})
const deleteTodoFailed = (todo) => ({
  type: "DELETE_TODO_FAILED",
  todo: todo
})

export const completeTodo = (todo) => {
  return dispatch => {
    fetch(`/todos/${todo._id["$oid"]}.json`, {
      method: "PATCH",
      body: JSON.stringify({ todo: { completed: !todo.completed } }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(
      result => (dispatch(completeTodoSuccess(result))),
      error => (dispatch(completeTodoFailed(error)))
    )
  }
}

const completeTodoSuccess = (todo) => ({
  type: "COMPLETE_TODO",
  todo: todo
})
const completeTodoFailed = (todo) => ({
  type: "COMPLETE_TODO_FAILED",
  todo: todo
})
