import * as React from "react"

class TodoList extends React.Component {
  render(){
    return (
      <div className="todolist_component">
        <ul>
          <li>
            <div>{ this.props.status }</div>
            { this.props.todolist_name }
          </li>
        </ul>
      </div>
    )
  }
}


export default TodoList
