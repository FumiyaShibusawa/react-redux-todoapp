const todolists = (state = { todo_lists: [] }, action) => {
  switch (action.type) {
    case "ADD_TODOLIST":
      return { todo_lists: [
          ...state.todo_lists,
          { name: action.text }
        ] }
    default:
      return state
  }
};

export default todolists
