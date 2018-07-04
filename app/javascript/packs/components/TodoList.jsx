import * as React from "react"

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: ""
    }
  }
  render() {
    let form_input;
    const _todo_list = this.props.todo_list;
    // where it throws error has to be outside of return so Error Boundaries can recognize it.
    if (this.state.trigger == "error!") {
      throw new Error("error!");
      this.setState({ trigger: "" });
    }
    return (
      <form className="js-todo-list-form" onSubmit={(e) => {
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
          this.props.hideForm();
        }
      }}>
        <input
          className="text-box"
          type="text"
          ref={node => { form_input = node }}
          defaultValue={_todo_list && _todo_list.name}
          onChange={e => this.setState({ trigger: e.target.value })} />
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

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormToggled: false,
      editFormIndex: null,
      todolistMenuIndex: null
    }
  }
  toggleForm = () => {
    this.setState({ isFormToggled: !this.state.isFormToggled });
  }
  showEditForm = (i) => {
    this.setState({ editFormIndex: i, todolistMenuIndex: null });
  }
  hideEditForm = () => {
    this.setState({ editFormIndex: null });
  }
  showTodoListMenu = i => {
    this.setState({ todolistMenuIndex: i });
  }

  render() {
    $(document).on("click", (e) => {
      const index = this.state.todolistMenuIndex;
      if (index != null && !$(e.target).closest(`#todolist-menu_${index}`).length) {
        this.setState({ todolistMenuIndex: null });
      }
    });
    return (
      <div className="todolist_component">
        <h2>TodoLists</h2>
        <ul className="todolists">
          {this.props.todo_lists.map((todo_list, i) => (
            <li
              key={`${todo_list.name}_${todo_list._id["$oid"]}`}
              onClick={() => { this.props.showTodos(i) }}
            >
              {this.state.editFormIndex == i ?
                <Form
                  action={"update"}
                  updateTodoList={this.props.updateTodoList}
                  todo_list={todo_list}
                  hideForm={this.hideEditForm}
                /> :
                <React.Fragment>
                  <span className={`list-element-${i}`}>{todo_list.name}</span>
                  <span
                    className="menu-ellipsis"
                    key={`${todo_list.name}_${todo_list._id["$oid"]}`}
                    onClick={e => {
                      e.stopPropagation();
                      this.showTodoListMenu(i);
                    }}>︙</span>
                  {this.state.todolistMenuIndex == i ?
                    <div id={`todolist-menu_${i}`} className="js-todolist-menu">
                      <ul>
                        <li onClick={e => {
                          e.stopPropagation();
                          this.showEditForm(i);
                        }}>edit</li>
                        <li onClick={e => {
                          e.stopPropagation();
                          this.props.deleteTodoList(todo_list);
                        }}>delete</li>
                      </ul>
                    </div> : null
                  }
                </React.Fragment>
              }
            </li>
          ))}
        </ul>
        <div className="add-button">
          {this.state.isFormToggled ?
            <Form
              action={"add"}
              addTodoList={this.props.addTodoList}
              todo_list={this.props.todo_list}
              hideForm={this.toggleForm}
            /> :
            <div data-add="show-todolist">
              <div className="plus">+</div>
              <span className="add-button-text" onClick={this.toggleForm}>add new todolist</span>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default TodoList
