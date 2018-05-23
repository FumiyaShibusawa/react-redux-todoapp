import { connect } from "react-redux"
import Todo from "../components/Todo"

const initialState = {
  name: "TodoList1だよ",
  todos: [
    { status: "open", name: "Todo1だよ" },
    { status: "open", name: "Todo2だよ" },
    { status: "done", name: "Todo3だよ" }
  ]
}

const mapStateToProps = state => ({
  todo_list: initialState
})

const mapDispatchToProps = dispatch => ({
  toggleTodoForm: () => {
    $("#todo_form").toggle();
  }
})

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer
