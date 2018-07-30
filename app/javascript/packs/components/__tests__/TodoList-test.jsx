import * as React from 'react';
import TodoList from '../TodoList';
import { Form } from '../TodoList';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

const todo_lists = [
  {
    _id: { $oid: "5b2d02e7f450fe5251b9eb9d" },
    user_id: { $oid: "5b2cf7fef450fe50d9d60871" },
    created_at: "2018-06-22T14:08:39.983Z",
    updated_at: "2018-06-22T14:08:39.983Z",
    name: "write code everyday",
    todos: []
  }
]
describe('<TodoList />', () => {
  test('should render without error', () => {
    const tree = renderer.create(
      <TodoList
        todo_lists={todo_lists}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // toggleForm
  test('state "isFormToggled" set to true when toggleForm fired', () => {
    const todolist = shallow(<TodoList todo_lists={todo_lists} />);
    todolist.find('.add-button-text').simulate('click');
    expect(todolist.state('isFormToggled')).toBe(true);
  });

  test('Form Component appears when toggleForm fired', () => {
    const todolist = shallow(<TodoList todo_lists={todo_lists} />);
    const form = shallow(<Form/>)
    todolist.find('.add-button-text').simulate('click');
    expect(todolist.containsMatchingElement(<Form/>)).toBe(true);
  });

  // showTodoListMenu
  test('todolist-menu appears when showTodoListMenu fired', () => {
    const todolist = shallow(<TodoList todo_lists={todo_lists} />);
    const e = todolist.find('.menu-ellipsis');
    e.simulate('click', { stopPropagation: () => undefined });
    expect(todolist.find('.todolist-menu')).toHaveLength(1);
  });

  // showEditForm

  // hideEditForm
});
