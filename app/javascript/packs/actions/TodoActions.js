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


export const deleteTodo = (todo, todo_list_id) => {
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch(`/todos/${todo._id["$oid"]}.json`, {
      method: "DELETE",
      body: JSON.stringify({ todo: { todo_list_id: todo_list_id } }),
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

const deleteTodoSuccess = (todo, todo_list_id) => ({
  type: "DELETE_TODO",
  todo_list_id: todo_list_id,
  todo: todo
})
const deleteTodoFailed = (todo, todo_list_id) => ({
  type: "DELETE_TODO_FAILED",
  todo_list_id: todo_list_id,
  todo: todo
})

export const completeTodo = (todo, todo_list_id) => {
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch(`/todos/${todo._id["$oid"]}.json`, {
      method: "PATCH",
      body: JSON.stringify({ todo: { completed: !todo.completed, todo_list_id: todo_list_id } }),
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

const completeTodoSuccess = (todo, todo_list_id) => ({
  type: "COMPLETE_TODO",
  todo_list_id: todo_list_id,
  todo: todo
})
const completeTodoFailed = (todo, todo_list_id) => ({
  type: "COMPLETE_TODO_FAILED",
  todo_list_id: todo_list_id,
  todo: todo
})
