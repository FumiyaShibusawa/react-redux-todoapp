import * as React from "react"

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let form_input;
    const _todo_list = this.props.todo_list;
    return (
      <form className="js-todo-list-form" id={this.props.form_id} onSubmit={(e) => {
        if (form_input) {
          e.preventDefault();
          if (form_input.value == "error!") {
            this.setState({ trigger: form_input.value });
          } else if (this.props.action == "add") {
            this.props.addTodoList(form_input.value);
          } else if (this.props.action == "update") {
            this.props.updateTodoList(_todo_list, form_input.value);
          }
          form_input.value = ""; // テキストボックス内の値をクリア
          this.props.hideForm(e);
        }
      }}>
        <input
          className="text-box"
          type="text"
          ref={node => { form_input = node }}
          defaultValue={_todo_list && _todo_list.name} />
        <div className="button-cont">
          <button type="submit" value="add">{this.props.action}</button>
          <div className="cancel" data-add="cancel" onClick={this.props.hideForm}>cancel</div>
        </div>
      </form>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: "",
      isFormToggled: false,
      EditFormToggleIndex: null
    }
  }
  showForm = (e) => {
    $(e.target.parentElement).hide();
    this.setState({ isFormToggled: true });
  }
  hideForm = (e) => {
    e.preventDefault();
    $('[data-add="show-todolist"]').show();
    this.setState({ isFormToggled: false });
  }
  showEditForm = (e, i) => {
    e.preventDefault();
    e.persist();
    this.setState({ EditFormToggleIndex: i });
    $(`#todolist-menu_${i}`).hide();
    $(`#todo_list_edit_form_${i}`).show();
    $(`.list-element-${i}`).hide();
  }
  hideEditForm = (e, i) => {
    e.preventDefault();
    this.setState({ EditFormToggleIndex: null });
  }
  toggleTodoListMenu = (e, i) => {
    $(`:not(#todolist-menu_${i}).js-todolist-menu`).hide();
    $(`#todolist-menu_${i}`).toggle();
  }

  render() {
    let form_input, edit_input;
    // where it throws error has to be outside of return so Error Boundaries can recognize it.
    if (this.state.trigger == "error!") {
      throw new Error("error!");
      this.setState({ trigger: "" });
    }
    return (
      <div className="todolist_component">
        <h2>TodoLists</h2>
        <ul className="todolists">
          {this.props.todo_lists.map((todo_list, i) => (
            <li
              key={`${todo_list.name}_${todo_list._id["$oid"]}`}
              onClick={() => { this.props.showTodos(i) }}
            >
              {this.state.EditFormToggleIndex == i ?
                <Form
                  action={"update"}
                  updateTodoList={this.props.updateTodoList}
                  todo_list={todo_list}
                  form_id={`todo_list_edit_form_${i}`}
                  hideForm={this.hideEditForm}
                /> :
                <React.Fragment>
                  <span className={`list-element-${i}`}>{todo_list.name}</span>
                  <span
                    className="menu-ellipsis"
                    key={`${todo_list.name}_${todo_list._id["$oid"]}`}
                    onClick={e => {
                      e.stopPropagation();
                      this.toggleTodoListMenu(e, i);
                    }}>︙</span>
                </React.Fragment>
              }
              <div id={`todolist-menu_${i}`} className="js-todolist-menu" style={{ display: 'none' }}>
                <ul>
                  <li onClick={e => {
                    e.stopPropagation();
                    this.showEditForm(e, i);
                  }}>edit</li>
                  <li onClick={e => {
                    e.stopPropagation();
                    this.props.deleteTodoList(todo_list);
                  }}>delete</li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className="add-button">
          <div data-add="show-todolist">
            <div className="plus">+</div>
            <span className="add-button-text" onClick={this.showForm}>add new todolist</span>
          </div>
          {this.state.isFormToggled ?
            <Form
              action={"add"}
              addTodoList={this.props.addTodoList}
              todo_list={this.props.todo_list}
              form_id={"todo_list_form"}
              hideForm={this.hideForm}
            /> : null}
        </div>
      </div>
    )
  }
}

export default TodoList
