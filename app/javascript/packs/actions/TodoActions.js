export const addTodo = (todo, index) => ({
  type: "ADD_TODO",
  todo: todo,
  index: index
})

export const showTodos = (todo_list) => ({
  type: "SHOW_TODOS",
  todo_list_name: todo_list.name,
  todos: todo_list.todos
})
