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
  type: "ADD_TODOLIST",
  todo_list: todo_list
})
