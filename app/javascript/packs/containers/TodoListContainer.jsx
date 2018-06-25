import * as React from "react"
import { connect } from "react-redux"
import TodoList from "../components/TodoList"
import Todo from "../components/Todo"
import { addTodoList, updateTodoList, fetchTodoLists, deleteTodoList } from "../actions/TodoListActions"
import { addTodo, showTodos, updateTodo, deleteTodo, completeTodo } from "../actions/TodoActions"

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
  updateTodoList: (todo_list, value) => {
    dispatch(updateTodoList(todo_list, value));
  },
  deleteTodoList: (todo_list) => {
    dispatch(deleteTodoList(todo_list));
  },
  addTodo: (value, todo_list_id, index) => {
    dispatch(addTodo(value, todo_list_id, index));
  },
  updateTodo: (todo, value, todo_list_id, index) => {
    dispatch(updateTodo(todo, value, todo_list_id, index));
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
// Error Boundaries only for demo
class DemoErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="todolist_component">
          <p>Something went wrong.</p>
          <details style={{ whiteSpace: "pre-wrap" }} >
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          <button type="button" onClick={() =>
            this.setState({ error: null, errorInfo: null })
          }>close error messages</button>
        </div>
      )
    }
    return this.props.children;
  }
}

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
      <main>
        <div className="todolist_container">
          <DemoErrorBoundary>
            <TodoList
              todo_lists={this.props.todo_lists}
              addTodoList={this.props.addTodoList}
              updateTodoList={this.props.updateTodoList}
              showTodos={this.showTodos}
              deleteTodoList={this.props.deleteTodoList}
            />
          </DemoErrorBoundary>
          <Todo
            todo_list={this.props.todo_lists[this.state.todo_list_idx]}
            addTodo={this.props.addTodo}
            updateTodo={this.props.updateTodo}
            deleteTodo={this.props.deleteTodo}
            completeTodo={this.props.completeTodo}
            num={this.state.todo_list_idx}
          />
        </div>
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
