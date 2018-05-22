import * as React from "react"

class Todo extends React.Component {
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
        <div onClick={ this.props.toggleTodoForm } >
          <i className="fa fa-plus"></i>
          <span>Todoを追加する</span>
        </div>
        <div id="todo_form" style={{ display: 'none' }}>
          <input type="text"/>
          <input type="submit" value="送信"/>
        </div>
      </div>
    )
  }
}

export default Todo
