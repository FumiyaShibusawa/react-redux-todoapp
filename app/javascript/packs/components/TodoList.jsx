import * as React from "react"

class TodoList extends React.Component {
  showForm = (e) => {
    $(e.target.parentElement).hide();
    $('#todo_list_form').show();
  }
  hideForm = (e) => {
    e.preventDefault();
    $('#todo_list_form').hide();
    $('[data-add="show-todolist"]').show();
  }

  render(){
    let input;
    return (
      <div className="todolist_component">
        <h2>TodoLists</h2>
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
        <div className="add-button">
          <div data-add="show-todolist" onClick={ this.showForm }>
            <div className="plus">+</div>
            <span>add new todolist</span>
          </div>
          <form id="todo_list_form" style={ { display: 'none' } } onSubmit={ (e) => {
              if (input) {
                e.preventDefault();
                this.props.addTodoList(input.value);
                input.value = ""; // テキストボックス内の値をクリア
              }
            } }>
            <input className="text-box" type="text" ref= { node => { input = node } }/>
            <div className="button-cont">
              <button type="submit" value="add">add</button>
              <div className="cancel" data-add="cancel" onClick={ this.hideForm }>cancel</div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
