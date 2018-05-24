// const initialState = {
//   todo_lists: [
//   {name: "TodoList1だよ"},
//   {name: "TodoList2だよ"},
//   {name: "TodoList3だよ"},
//   {name: "TodoList4だよ"},
// ]}

const todolists = (state = {todo_lists: []}, action) => {
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
