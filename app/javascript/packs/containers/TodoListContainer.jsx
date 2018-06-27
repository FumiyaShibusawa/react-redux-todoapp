import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import TodoList from "../components/TodoList"
import Todo from "../components/Todo"
import * as TodoListActions from "../actions/TodoListActions"
import * as TodoActions from "../actions/TodoActions"

const mapStateToProps = state => ({
  todo_lists: state.todolists
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ...TodoListActions,
    ...TodoActions
  }, dispatch)
);
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
    const {
      todo_lists,
      addTodoList,
      updateTodoList,
      deleteTodoList,
      addTodo,
      updateTodo,
      deleteTodo,
      completeTodo,
    } = this.props;
    return (
      <main>
        <div className="todolist_container">
          <DemoErrorBoundary>
            <TodoList
              todo_lists={todo_lists}
              addTodoList={addTodoList}
              updateTodoList={updateTodoList}
              showTodos={this.showTodos}
              deleteTodoList={deleteTodoList}
            />
          </DemoErrorBoundary>
          <Todo
            todo_list={todo_lists[this.state.todo_list_idx]}
            addTodo={addTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            num={this.state.todo_list_idx}
          />
        </div>
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
