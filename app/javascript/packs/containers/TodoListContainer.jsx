import * as React from "react"
import { connect } from "react-redux"
import Navigation from "../components/Navigation"
import TodoList from "../components/TodoList"
import Todo from "../components/Todo"
import { addTodoList, fetchTodoLists, deleteTodoList } from "../actions/TodoListActions"
import { addTodo, showTodos, deleteTodo, completeTodo } from "../actions/TodoActions"

const mapStateToProps = state => ({
  todo_lists: state.todolists
})

const mapDispatchToProps = dispatch => ({
  fetchTodoLists: () => {
    dispatch(fetchTodoLists());
  },
  addTodoList: (todo_list) => {
    dispatch(addTodoList(todo_list));
  },
  deleteTodoList: (todo_list) => {
    dispatch(deleteTodoList(todo_list));
  },
  addTodo: (todo, todo_list_id, index) => {
    dispatch(addTodo(todo, todo_list_id, index));
  },
  deleteTodo: (todo) => {
    dispatch(deleteTodo(todo));
  },
  completeTodo: (todo) => {
    dispatch(completeTodo(todo));
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
  componentDidMount = () => {
    this.props.fetchTodoLists()
  }
  showTodos = (index) => {
    this.setState({ todo_list_idx: index })
  }
  render() {
    return (
      <div>
        <main>
          <div className="todolist_container">
            <TodoList
            todo_lists={ this.props.todo_lists }
            addTodoList={ this.props.addTodoList }
            showTodos={ this.showTodos }
            deleteTodoList={ this.props.deleteTodoList }
            />
            <Todo
            todo_list={ this.props.todo_lists[this.state.todo_list_idx] }
            addTodo={ this.props.addTodo }
            deleteTodo={ this.props.deleteTodo }
            completeTodo={ this.props.completeTodo }
            num={ this.state.todo_list_idx }
            />
          </div>
        </main>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
