import * as React from "react"

class Todo extends React.Component {
  render(){
    return (
      <div className="todo_component">
        <ul>
          <li>
            <div>{ this.props.status }</div>
            { this.props.todo_name }
          </li>
        </ul>
      </div>
    )
  }
}


export default Todo
