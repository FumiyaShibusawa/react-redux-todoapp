const todolists = (state = { todo_lists: [] }, action) => {
  switch (action.type) {
    case "FETCH_TODOLISTS":
      return { todo_lists:
        action.todo_lists
      }
    case "FETCH_TODOLISTS_FAILED":
      return state

    case "ADD_TODOLIST":
      return { todo_lists:
        action.todo_lists
      }
    case "ADD_TODOLIST_FAILED":
      return state

    case "DELETE_TODOLIST":
      return { todo_lists:
        action.todo_lists
      }
    case "DELETE_TODOLIST_FAILED":
      return state

    case "ADD_TODO":
      for (let i = 0; i < state.todo_lists.length; i++) {
        if (i === action.index) {
          state.todo_lists[i].todos.push({ name: action.todo, status: "open" })
        }
      }
      return { todo_lists: [
        ...state.todo_lists
      ] }
    default:
      return state
  }
};

export default todolists
