export const addTodo = (value, todo_list_id, index) => {
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch("/todos.json", {
      method: "POST",
      body: JSON.stringify({ todo: { name: value, todo_list_id: todo_list_id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authentication": `Bearer ${jwtToken}`
      })
    })
      .then(response => response.json())
      .then(
        result => (dispatch(addTodoSuccess(result, todo_list_id, index))),
        error => (dispatch(addTodoFailed(error, todo_list_id, index)))
      )
  }
}

const addTodoSuccess = (value, todo_list_id, index) => ({
  type: "ADD_TODO",
  todo: value,
  todo_list_id: todo_list_id,
  index: index
})
const addTodoFailed = (value, todo_list_id, index) => ({
  type: "ADD_TODO_FAILED",
  todo: value,
  todo_list_id: todo_list_id,
  index: index
})


export const updateTodo = (todo, value, todo_list_id, index) => {
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch(`/todos/${todo._id["$oid"]}.json`, {
      method: "PATCH",
      body: JSON.stringify({ todo: { name: value, todo_list_id: todo_list_id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authentication": `Bearer ${jwtToken}`
      })
    })
      .then(response => response.json())
      .then(
        result => (dispatch(updateTodoSuccess(result, todo_list_id, index))),
        error => (dispatch(updateTodoFailed(error, todo_list_id, index)))
      )
  }
}

const updateTodoSuccess = (value, todo_list_id, index) => ({
  type: "UPDATE_TODO",
  todo: value,
  todo_list_id: todo_list_id,
  index: index
})
const updateTodoFailed = (value, todo_list_id, index) => ({
  type: "UPDATE_TODO_FAILED",
  todo: value,
  todo_list_id: todo_list_id,
  index: index
})


export const showTodos = (todo_list) => ({
  type: "SHOW_TODOS",
  todo_list_name: todo_list.name,
  todos: todo_list.todos
})


export const deleteTodo = (todo) => {
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch(`/todos/${todo._id["$oid"]}.json`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authentication": `Bearer ${jwtToken}`
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
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch(`/todos/${todo._id["$oid"]}.json`, {
      method: "PATCH",
      body: JSON.stringify({ todo: { completed: !todo.completed } }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authentication": `Bearer ${jwtToken}`
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
