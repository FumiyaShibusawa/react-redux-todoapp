export const fetchTodoLists = () => {
  return dispatch => {
    const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
    fetch("/todo_lists.json", {
      headers: new Headers({
        "Authentication": `Bearer ${jwtToken}`
      })
    })
    .then(response => response.json())
    .then(
      result => (dispatch(fetchTodoListsSuccess(result))),
      error => (dispatch(fetchTodoListsFailed(error)))
    )
  }
}

const fetchTodoListsSuccess = (todo_lists) => ({
  type: "FETCH_TODOLISTS",
  todo_lists: todo_lists
})
const fetchTodoListsFailed = (error) => ({
  type: "FETCH_TODOLISTS_FAILED",
  error: error
})



export const addTodoList = (todo_list) => {
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch("/todo_lists.json", {
      method: "POST",
      body: JSON.stringify({ todo_list: { name: todo_list } }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authentication": `Bearer ${jwtToken}`
      })
    })
    .then(response => response.json())
    .then(
      result => (dispatch(addTodoListSuccess(result))),
      error => (dispatch(addTodoListFailed(error)))
    )
  }
}

const addTodoListSuccess = (todo_lists) => ({
  type: "ADD_TODOLIST",
  todo_lists: todo_lists
})
const addTodoListFailed = (todo_lists) => ({
  type: "ADD_TODOLIST_FAILED",
  todo_lists: todo_lists
})


export const updateTodoList = (todo_list, value) => {
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch(`/todo_lists/${todo_list._id["$oid"]}.json`, {
      method: "PATCH",
      body: JSON.stringify({ todo_list: { name: value } }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authentication": `Bearer ${jwtToken}`
      })
    })
    .then(response => response.json())
    .then(
      result => (dispatch(updateTodoListSuccess(result))),
      error => (dispatch(updateTodoListFailed(error)))
    )
  }
}

const updateTodoListSuccess = (todo_lists) => ({
  type: "UPDATE_TODOLIST",
  todo_lists: todo_lists
})
const updateTodoListFailed = (todo_lists) => ({
  type: "UPDATE_TODOLIST_FAILED",
  todo_lists: todo_lists
})


export const deleteTodoList = (todo_list) => {
  const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
  return dispatch => {
    fetch(`/todo_lists/${todo_list._id["$oid"]}.json`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authentication": `Bearer ${jwtToken}`
      })
    })
    .then(response => response.json())
    .then(
      result => (dispatch(deleteTodoListSuccess(result))),
      error => (dispatch(deleteTodoListFailed(error)))
    )
  }
}

const deleteTodoListSuccess = (todo_lists) => ({
  type: "DELETE_TODOLIST",
  todo_lists: todo_lists
})
const deleteTodoListFailed = (todo_lists) => ({
  type: "DELETE_TODOLIST_FAILED",
  todo_lists: todo_lists
})
