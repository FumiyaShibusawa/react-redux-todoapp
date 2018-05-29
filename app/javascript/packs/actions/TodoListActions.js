export const fetchTodoLists = () => {
  return dispatch => {
    fetch("/todo_lists.json")
    .then(response => response.json())
    .then(
      result => {
        console.log(result);
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
        return dispatch(addTodoListSuccess(todo_list));
      },
      error => {
        return dispatch(addTodoListFailed(todo_list));
      }
    )
  }
}

export const addTodoListSuccess = (todo_list) => ({
  type: "ADD_TODOLIST",
  todo_list: todo_list
})
export const addTodoListFailed = (todo_list) => ({
  type: "ADD_TODOLIST_FAILED",
  todo_list: todo_list
})


export const deleteTodoList = (todo_list) => {
  return dispatch => {
    debugger
    fetch(`/todo_lists/${todo_list._id["$oid"]}.json`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(
      result => {
        return dispatch(deleteTodoListSuccess(todo_list));
      },
      error => {
        return dispatch(deleteTodoListFailed(todo_list));
      }
    )
  }
}

export const deleteTodoListSuccess = (todo_list) => ({
  type: "DELETE_TODOLIST",
  todo_list: todo_list
})
export const deleteTodoListFailed = (todo_list) => ({
  type: "DELETE_TODOLIST_FAILED",
  todo_list: todo_list
})
