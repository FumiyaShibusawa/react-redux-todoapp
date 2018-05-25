import * as React from "react"
import { connect } from "react-redux"
import TodoList from "../components/TodoList"
import Todo from "../components/Todo"
import { addTodoList } from "../actions/TodoListActions"
import { addTodo, showTodos } from "../actions/TodoActions"

const mapStateToProps = state => ({
  todo_lists: state.todolists.todo_lists,
})

const mapDispatchToProps = dispatch => ({
  toggleTodoListForm: () => {
    $("#todo_list_form").toggle();
  },
  toggleTodoForm: () => {
    $("#todo_form").toggle();
  },
  addNewTodoList: (todo_list) => {
    dispatch(addTodoList(todo_list));
  },
  addNewTodo: (todo, index) => {
    dispatch(addTodo(todo, index));
  },
  showTodos: (todo_list) => {
    dispatch(showTodos(todo_list));
  }
})

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_list_idx: 0
    };
  }
  showTodos = (index) => {
    this.setState({ todo_list_idx: index })
  }
  render() {
    return (
      <div className="todolist_container">
        <TodoList
        todo_lists={ this.props.todo_lists }
        toggleTodoListForm={ this.props.toggleTodoListForm }
        addNewTodoList={ this.props.addNewTodoList }
        showTodos={ this.showTodos }
        />
        <Todo
        todo_list={ this.props.todo_lists[this.state.todo_list_idx] }
        toggleTodoForm={ this.props.toggleTodoForm }
        addNewTodo={ this.props.addNewTodo }
        num={ this.state.todo_list_idx }
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
