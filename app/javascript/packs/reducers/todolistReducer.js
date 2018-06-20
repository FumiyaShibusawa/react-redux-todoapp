const todolists = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TODOLISTS":
      return action.todo_lists
    case "FETCH_TODOLISTS_FAILED":
      return state

    case "ADD_TODOLIST":
      return action.todo_lists
    case "ADD_TODOLIST_FAILED":
      return state

    case "UPDATE_TODOLIST":
      return action.todo_lists
    case "UPDATE_TODOLIST_FAILED":
      return state

    case "DELETE_TODOLIST":
      return action.todo_lists
    case "DELETE_TODOLIST_FAILED":
      return state

    case "ADD_TODO":
      // TODO: TodoListモデルをまるまる取得し直すのは燃費が悪い。
      // 一部だけ変更して新しいstateとして返却したいけどやり方がわからない。
      return action.todo
    case "ADD_TODO_FAILED":
      return state

    case "DELETE_TODO":
      return action.todo
    case "DELETE_TODO_FAILED":
      return state

    case "COMPLETE_TODO":
      return action.todo
    case "COMPLETE_TODO_FAILED":
      return state

    default:
      return state
  }
};

export default todolists
