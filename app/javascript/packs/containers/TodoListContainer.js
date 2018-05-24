import { connect } from "react-redux"
import TodoList from "../components/TodoList"
import { addTodoList } from "../actions/TodoListActions"

const mapStateToProps = state => ({
  todo_lists: state.todo_lists
})

const mapDispatchToProps = dispatch => ({
  toggleTodoListForm: () => {
    $("#todo_list_form").toggle();
  },
  addNewTodoList: () => {
    dispatch(addTodoList("hogeeee"))
  }
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
