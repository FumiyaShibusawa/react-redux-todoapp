import * as React from "react"

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trigger: "" }
  }
  showForm = (e) => {
    $(e.target.parentElement).hide();
    $('#todo_list_form').show();
  }
  hideForm = (e) => {
    e.preventDefault();
    $('#todo_list_form').hide();
    $('[data-add="show-todolist"]').show();
  }
  showEditForm = (e, i) => {
    e.preventDefault();
    e.persist();
    $(`#todolist-menu_${i}`).hide();
    $(`#todo_list_edit_form_${i}`).show();
    $(`.list-element-${i}`).hide();
  }
  hideEditForm = (e, i) => {
    e.preventDefault();
    $(`#todo_list_edit_form_${i}`).hide();
    $(`.list-element-${i}`).show();
  }
  toggleTodoListMenu = (e, i) => {
    $(`:not(#todolist-menu_${i}).js-todolist-menu`).hide();
    $(`#todolist-menu_${i}`).toggle();
  }

  render(){
    let form_input, edit_input;
    // where it throws error has to be outside of return so Error Boundaries can recognize it.
    if (this.state.trigger == "error!") {
      throw new Error("error!");
      this.setState({ trigger: "" });
    }
    console.log(form_input);
    return (
      <div className="todolist_component">
        <h2>TodoLists</h2>
        <ul className="todolists">
          { this.props.todo_lists.map( (todo_list, i) => (
            <li
            key={ `${todo_list.name}_${todo_list._id["$oid"]}` }
            onClick={ () => { this.props.showTodos(i) } }
            ><span className={`list-element-${i}`}>{ todo_list.name }</span>
            <form id={`todo_list_edit_form_${i}`} className="js-todo-list-edit-form" style={{ display: 'none' }} onSubmit={ (e) => {
              if (edit_input) {
                e.preventDefault();
                this.props.updateTodoList(todo_list, edit_input.value);
              }
            } }>
              <input className="text-box" type="text" ref= { node => { edit_input = node } } defaultValue={ todo_list.name }/>
              <div className="button-cont">
                <button type="submit" value="add">update</button>
                <div className="cancel" data-add="cancel" onClick={ e => this.hideEditForm(e, i) }>cancel</div>
              </div>
            </form>
            <span
            className="menu-ellipsis"
            key={ `${todo_list.name}_${todo_list._id["$oid"]}` }
            onClick={ e => {
              e.stopPropagation();
              this.toggleTodoListMenu(e, i);
            } }>︙</span>
            <div id={`todolist-menu_${i}`} className="js-todolist-menu" style={{ display: 'none' }}>
              <ul>
                <li onClick={ e => {
                  e.stopPropagation();
                  this.showEditForm(e, i);
                } }>edit</li>
                <li onClick={ e => {
                  e.stopPropagation();
                  this.props.deleteTodoList(todo_list);
                } }>delete</li>
              </ul>
            </div>
            </li>
          ) ) }
        </ul>
        <div className="add-button">
          <div data-add="show-todolist">
            <div className="plus">+</div>
            <span className="add-button-text" onClick={ this.showForm }>add new todolist</span>
          </div>
          <form id="todo_list_form" style={{ display: 'none' }} onSubmit={ (e) => {
            if (form_input) {
              e.preventDefault();
              if (form_input.value == "error!") {
                this.setState({ trigger: form_input.value });
              } else {
                this.props.addTodoList(form_input.value);
              }
              form_input.value = ""; // テキストボックス内の値をクリア
            }
          } }>
            <input className="text-box" type="text" ref= { node => { form_input = node } }/>
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
