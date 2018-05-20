import * as React from "react"

interface TodoProps {
  todo_name: string,
  status: string
}

class Todo extends React.Component<TodoProps, {}> {
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
