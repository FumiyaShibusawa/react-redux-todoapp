import { connect } from "react-redux"
import TodoList from "../components/TodoList"

const initialState = [
  {name: "TodoList1だよ"},
  {name: "TodoList2だよ"},
  {name: "TodoList3だよ"},
  {name: "TodoList4だよ"},
]


const mapStateToProps = state => ({
  todo_lists: initialState
})

const mapDispatchToProps = dispatch => ({
  toggleTodoListForm: () => {
    $("#todo_list_form").toggle();
  },
  addNewTodoList: (e) => {
    console.log(e);
  }
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
