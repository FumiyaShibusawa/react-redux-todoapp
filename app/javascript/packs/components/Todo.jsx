import * as React from "react"

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let form_input;
    return (
      <form id={this.props.form_id} onSubmit={(e) => {
        if (form_input) {
          e.preventDefault();
          if (this.props.action == "add") {
            this.props.addTodo(form_input.value, this.props.todo_list._id["$oid"], this.props.num);
          } else if (this.props.action == "update") {
            this.props.updateTodo(this.props.todo, form_input.value, this.props.todo_list._id["$oid"], this.props.num);
          }
          form_input.value = ""; // テキストボックス内の値をクリア
        }
      }}>
        <input className="text-box" type="text" ref={node => { form_input = node }} />
        <div className="button-cont">
          <button type="submit" value="add">{this.props.action}</button>
          <div className="cancel" data-add="cancel" onClick={this.props.hideForm}>cancel</div>
        </div>
      </form>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormToggled: false,
      isEditFormToggled: false
    }
  }
  showForm = (e) => {
    $(e.target.parentElement).hide();
    // $('#todo_form').show();
    this.setState({ isFormToggled: true });
  }
  hideForm = (e) => {
    e.preventDefault();
    $('#todo_form').hide();
    $('[data-add="show-todo"]').show();
    this.setState({ isFormToggled: false });
  }
  showEditForm = (e, i) => {
    e.preventDefault();
    e.persist();
    this.setState({ isEditFormToggled: true });
    $(`#todo-menu_${i}`).hide();
    $(`.todo-element-${i}`).hide();
  }
  hideEditForm = (e, i) => {
    e.preventDefault();
    $(`#todo_edit_form_${i}`).hide();
    $(`.todo-element-${i}`).show();
  }
  toggleTodoMenu = (e, i) => {
    $(`:not(#todo-menu_${i}).js-todo-menu`).hide();
    $(`#todo-menu_${i}`).toggle();
  }

  render() {
    console.log(this.state)
    return (
      <div className="todo_component">
        {(() => {
          if (this.props.todo_list) {
            return (
              <div>
                <h2>{this.props.todo_list.name}</h2>
                <ul className="todos">
                  {(() => {
                    if (this.props.todo_list.todos) {
                      return this.props.todo_list.todos.map((todo, i) => (
                        <li key={`${todo.name}_${i}`}>
                          <span className={`todo-element-${i}`}>
                            <span
                              className={`completed ${todo.completed}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                this.props.completeTodo(todo, this.props.todo_list._id["$oid"]);
                              }}
                            ></span>
                            {todo.name}
                          </span>
                          {this.state.isEditFormToggled ?
                            <Form
                              action={"add"}
                              addTodo={this.props.addTodo}
                              todo_list={this.props.todo_list}
                              form_id={`todo_edit_form_${i}`}
                            /> : null}
                          <span
                            className="menu-ellipsis"
                            key={`${todo.name}_${todo._id["$oid"]}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              this.toggleTodoMenu(e, i);
                            }}>︙</span>
                          <div id={`todo-menu_${i}`} className="js-todo-menu" style={{ display: 'none' }}>
                            <ul>
                              <li onClick={e => {
                                e.stopPropagation();
                                this.showEditForm(e, i);
                              }}>edit</li>
                              <li onClick={e => {
                                e.stopPropagation();
                                this.props.deleteTodo(todo, this.props.todo_list._id["$oid"]);
                              }}>delete</li>
                            </ul>
                          </div>
                        </li>
                      ))
                    }
                  })()}
                </ul>
                <div className="add-button">
                  <div data-add="show-todo">
                    <div className="plus">+</div>
                    <span className="add-button-text" onClick={this.showForm}>add new todo</span>
                  </div>
                  {this.state.isFormToggled ?
                    <Form
                      action={"add"}
                      addTodo={this.props.addTodo}
                      todo_list={this.props.todo_list}
                      form_id={"todo_form"}
                      hideForm={this.hideForm}
                    /> : null}
                </div>
              </div>
            )
          }
        })()}
      </div>
    )
  }
}

export default Todo
