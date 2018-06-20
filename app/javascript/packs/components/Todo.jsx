import * as React from "react"

class Todo extends React.Component {
  showForm = (e) => {
    $(e.target.parentElement).hide();
    $('#todo_form').show();
  }
  hideForm = (e) => {
    e.preventDefault();
    $('#todo_form').hide();
    $('[data-add="show-todo"]').show();
  }

  render(){
    let input;
    return (
      <div className="todo_component">
        { (() => {
          if (this.props.todo_list) {
            return(
              <div>
                <h2>{ this.props.todo_list.name }</h2>
                <ul className="todos">
                  { (() => {
                    if (this.props.todo_list.todos) {
                      return this.props.todo_list.todos.map( (todo, i) => (
                        <li key={ `${todo.name}_${i}` }>
                          <span
                          className={`completed ${todo.completed}`}
                          onClick={ (e) => {
                            e.stopPropagation();
                            this.props.completeTodo(todo);
                          } }
                          ></span>
                          <span>{ todo.name }</span>
                          <span
                          className="menu-ellipsis"
                          key={ `${todo.name}_${todo._id["$oid"]}` }
                          onClick={ (e) => {
                            e.stopPropagation();
                            this.props.deleteTodo(todo);
                          } }>︙</span>
                        </li>
                      ))
                    }
                  })() }
                </ul>
                <div className="add-button">
                  <div data-add="show-todo">
                    <div className="plus">+</div>
                    <span className="add-button-text" onClick={ this.showForm }>add new todo</span>
                  </div>
                  <form id="todo_form" style={{ display: 'none' }} onSubmit={ (e) => {
                      if (input) {
                        e.preventDefault();
                        this.props.addTodo(input.value, this.props.todo_list._id["$oid"], this.props.num);
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
        })() }
      </div>
    )
  }
}

export default Todo
