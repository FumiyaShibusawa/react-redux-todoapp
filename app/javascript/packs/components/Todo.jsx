import * as React from "react"

class Todo extends React.Component {
  toggleTodoForm = () => {
    $("#todo_form").toggle();
  }
  render(){
    return (
      <div className="todo_component">
        <h2>{ this.props.todo_list.name }</h2>
        <ul>
          {this.props.todo_list.todos.map( (todo, i) => (
            <li key={ `${todo.name}_${i}` }>
              <div>{ todo.status }</div>
              { todo.name }
            </li>
          ))}
        </ul>
        <div onClick={ this.toggleTodoForm } >
          <i className="fa fa-plus"></i>
          <span>Todoを追加する</span>
        </div>
        <div id="todo_form" style={{ display: 'none' }}>
          <input type="text"/>
        </div>
      </div>
    )
  }
}

Todo.defaultProps = {
  todo_list: {
    name: "TodoList1だよ",
    todos: [
      { status: "open", name: "Todo1だよ" },
      { status: "open", name: "Todo2だよ" },
      { status: "done", name: "Todo3だよ" }
    ]
  }
}

export default Todo
