import * as React from "react"

class TodoList extends React.Component {
  render(){
    let input;
    return (
      <div className="todolist_component">
        <ul className="todolists">
            { this.props.todo_lists.map( (todo_list, i) => (
              <li
              key={ `${todo_list.name}_${todo_list._id["$oid"]}` }
              onClick={ () => { this.props.showTodos(i) } }
              >{ todo_list.name }
              <span
              className="delete"
              key={ `${todo_list.name}_${todo_list._id["$oid"]}` }
              onClick={ (e) => {
                e.stopPropagation();
                this.props.deleteTodoList(todo_list);
              } }>×</span>
              </li>
            ) ) }
        </ul>
        <div onClick={ this.props.toggleTodoListForm }>
          <i className="fa fa-plus"></i>
          <span>add new todolist</span>
        </div>
        <div id="todo_list_form" style={ { display: 'none' } }>
          <input type="text" ref= { node => { input = node } }/>
          <input type="submit" value="送信" onClick={ () => {
            if (input) {
              this.props.addTodoList(input.value);
              input.value = ""; // テキストボックス内の値をクリア
            }
          } }/>
        </div>
      </div>
    )
  }
}

export default TodoList
