export const fetchTodoLists = () => {
  return dispatch => {
    fetch("/todo_lists.json")
    .then(response => response.json())
    .then(
      result => {
        return dispatch(fetchTodoListsSuccess(result));
      },
      error => {
        return dispatch(fetchTodoListsFailed(error));
      }
    )
  }
}

export const fetchTodoListsSuccess = (todo_lists) => ({
  type: "FETCH_TODOLISTS",
  todo_lists: todo_lists
})
export const fetchTodoListsFailed = (error) => ({
  type: "FETCH_TODOLISTS_FAILED",
  error: error
})



export const addTodoList = (todo_list) => {
  return dispatch => {
    fetch("/todo_lists.json", {
      method: "POST",
      body: JSON.stringify({ todo_list: { name: todo_list } }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(
      result => {
        return dispatch(addTodoListSuccess(result));
      },
      error => {
        return dispatch(addTodoListFailed(error));
      }
    )
  }
}

export const addTodoListSuccess = (todo_lists) => ({
  type: "ADD_TODOLIST",
  todo_lists: todo_lists
})
export const addTodoListFailed = (todo_lists) => ({
  type: "ADD_TODOLIST_FAILED",
  todo_lists: todo_lists
})


export const deleteTodoList = (todo_list) => {
  return dispatch => {
    fetch(`/todo_lists/${todo_list._id["$oid"]}.json`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(
      result => {
        return dispatch(deleteTodoListSuccess(result));
      },
      error => {
        return dispatch(deleteTodoListFailed(error));
      }
    )
  }
}

export const deleteTodoListSuccess = (todo_lists) => ({
  type: "DELETE_TODOLIST",
  todo_lists: todo_lists
})
export const deleteTodoListFailed = (todo_lists) => ({
  type: "DELETE_TODOLIST_FAILED",
  todo_lists: todo_lists
})
