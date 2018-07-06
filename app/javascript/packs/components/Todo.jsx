import * as React from "react"

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let form_input;
    const _todo = this.props.todo, _todo_list = this.props.todo_list;
    return (
      <form className="js-todo-form" id={this.props.form_id} onSubmit={(e) => {
        if (form_input) {
          e.preventDefault();
          if (this.props.action == "add") {
            this.props.addTodo(form_input.value, _todo_list._id["$oid"]);
          } else if (this.props.action == "update") {
            this.props.updateTodo(_todo, form_input.value, _todo_list._id["$oid"]);
          }
          form_input.value = ""; // テキストボックス内の値をクリア
          this.props.hideForm(e);
        }
      }}>
        <input
          className="text-box"
          type="text"
          ref={node => { form_input = node }}
          defaultValue={_todo && _todo.name} />
        <div className="button-cont">
          <button type="submit" value="add">{this.props.action}</button>
          <div className="cancel" data-add="cancel" onClick={e => {
            e.stopPropagation();
            this.props.hideForm();
          }}>cancel</div>
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
      editFormIndex: null,
      todoMenuIndex: null
    }
  }
  toggleForm = () => {
    this.setState({ isFormToggled: !this.state.isFormToggled });
  }
  showEditForm = (i) => {
    this.setState({ editFormIndex: i, todoMenuIndex: null });
  }
  hideEditForm = () => {
    this.setState({ editFormIndex: null });
  }
  showTodoMenu = (i) => {
    this.setState({ todoMenuIndex: i });
  }

  render() {
    $(document).on("click", (e) => {
      const index = this.state.todoMenuIndex;
      if (index != null && !$(e.target).closest(`#todo-menu_${index}`).length) {
        this.setState({ todoMenuIndex: null });
      }
    });
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
                          {this.state.editFormIndex == i ?
                            <Form
                              action={"update"}
                              form_id={`todo_edit_form_${i}`}
                              updateTodo={this.props.updateTodo}
                              todo={todo}
                              todo_list={this.props.todo_list}
                              hideForm={this.hideEditForm}
                            /> :
                            <React.Fragment>
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
                              <span
                                className="menu-ellipsis"
                                key={`${todo.name}_${todo._id["$oid"]}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  this.showTodoMenu(i);
                                }}>︙</span>
                              {this.state.todoMenuIndex == i ?
                                <div id={`todo-menu_${i}`} className="js-todo-menu">
                                  <ul>
                                    <li onClick={e => {
                                      e.stopPropagation();
                                      this.showEditForm(i);
                                    }}>edit</li>
                                    <li onClick={e => {
                                      e.stopPropagation();
                                      this.props.deleteTodo(todo, this.props.todo_list._id["$oid"]);
                                    }}>delete</li>
                                  </ul>
                                </div> : null
                              }
                            </React.Fragment>
                          }
                        </li>
                      ))
                    }
                  })()}
                </ul>
                <div className="add-button">
                  {this.state.isFormToggled ?
                    <Form
                      action={"add"}
                      addTodo={this.props.addTodo}
                      todo_list={this.props.todo_list}
                      form_id={"todo_form"}
                      hideForm={this.toggleForm}
                    /> :
                    <div data-add="show-todo">
                      <div className="plus">+</div>
                      <span className="add-button-text" onClick={this.toggleForm}>add new todo</span>
                    </div>
                  }
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
