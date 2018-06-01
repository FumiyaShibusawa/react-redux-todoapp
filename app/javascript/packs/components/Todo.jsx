import * as React from "react"

class Todo extends React.Component {
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
                          className="delete"
                          key={ `${todo.name}_${todo._id["$oid"]}` }
                          onClick={ (e) => {
                            e.stopPropagation();
                            this.props.deleteTodo(todo);
                          } }>×</span>
                        </li>
                      ))
                    }
                  })() }
                </ul>
                <div onClick={ this.props.toggleTodoForm } >
                  <i className="fa fa-plus"></i>
                  <span>Todoを追加する</span>
                </div>
                <div id="todo_form" style={{ display: 'none' }}>
                  <input type="text" ref= { node => { input = node } }/>
                  <input type="submit" value="送信" onClick={ () => {
                    if (input) {
                      this.props.addTodo(input.value, this.props.todo_list._id["$oid"], this.props.num);
                      input.value = ""; // テキストボックス内の値をクリア
                    }
                  } }/>
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
