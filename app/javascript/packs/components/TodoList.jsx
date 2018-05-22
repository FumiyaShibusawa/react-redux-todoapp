import * as React from "react"

class TodoList extends React.Component {
  render(){
    return (
      <div className="todolist_component">
        <ul>
            { this.props.todo_lists.map( (todo_list, i) => (
              <li key={ `${todo_list.name}_${i}` }>{ todo_list.name }</li>
            ) ) }
        </ul>
        <div onClick={ this.props.toggleTodoListForm } >
          <i className="fa fa-plus"></i>
          <span>Todoリストを追加する</span>
        </div>
        <div id="todo_list_form" style={{ display: 'none' }}>
          <input type="text"/>
          <input type="submit" value="送信" onClick={ this.props.addNewTodoList }/>
        </div>
      </div>
    )
  }
}

export default TodoList
