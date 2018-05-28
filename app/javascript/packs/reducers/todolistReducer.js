const todolists = (state = { todo_lists: [] }, action) => {
  switch (action.type) {
    case "ADD_TODOLIST":
      return { todo_lists: [
        ...state.todo_lists,
        { name: action.todo_list, todos: [] }
      ] }
    case "ADD_TODO":
      for (let i = 0; i < state.todo_lists.length; i++) {
        if (i === action.index) {
          state.todo_lists[i].todos.push({ name: action.todo, status: "open" })
        }
      }
      return { todo_lists: [
        ...state.todo_lists
      ] }
    case "ADD_TODOLIST_FAILED":
      return state
    default:
      return state
  }
};

export default todolists
