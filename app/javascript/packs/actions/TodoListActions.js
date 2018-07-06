import { requestAPI } from "../API/requestAPI";

export const fetchTodoLists = () => {
  return requestAPI(
    "/todo_lists",
    "GET",
    null,
    fetchTodoListsSuccess,
    fetchTodoListsFailed
  );
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
  return requestAPI(
    "/todo_lists",
    "POST",
    { todo_list: { name: todo_list } },
    addTodoListSuccess,
    addTodoListFailed
  );
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
  return requestAPI(
    `/todo_lists/${todo_list._id["$oid"]}`,
    "PATCH",
    { todo_list: { name: value } },
    updateTodoListSuccess,
    updateTodoListFailed
  );
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
  return requestAPI(
    `/todo_lists/${todo_list._id["$oid"]}`,
    "DELETE",
    null,
    deleteTodoListSuccess,
    deleteTodoListFailed
  );
}

const deleteTodoListSuccess = (todo_lists) => ({
  type: "DELETE_TODOLIST",
  todo_lists: todo_lists
})
const deleteTodoListFailed = (todo_lists) => ({
  type: "DELETE_TODOLIST_FAILED",
  todo_lists: todo_lists
})
