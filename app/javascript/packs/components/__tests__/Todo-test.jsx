import * as React from 'react';
import Todo from '../Todo';
import { Form } from '../Todo';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

const todo_lists = [
  {
    _id: { $oid: "5b2d02e7f450fe5251b9eb9d" },
    user_id: { $oid: "5b2cf7fef450fe50d9d60871" },
    created_at: "2018-06-22T14:08:39.983Z",
    updated_at: "2018-06-22T14:08:39.983Z",
    name: "write code everyday",
    todos: [{
      _id: { $oid: "5b237ade2208a2001bc74882" },
      created_at: "2018-06-22T14:08:39.983Z",
      updated_at: "2018-06-22T14:08:39.983Z",
      name: "open your editor",
      todo_list_id: { $oid: "5b2d02e7f450fe5251b9eb9d" },
      completed: false
    }]
  }
]
describe('<Todo />', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <Todo
        todo_list={todo_lists[0]}
        num={0}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
  // toggleForm
  test('state "isFormToggled" set to true when toggleForm fired', () => {
    const todo = mount(<Todo todo_list={todo_lists[0]} num={0} />);
    todo.find('.add-button-text').simulate('click');
    expect(todo.state('isFormToggled')).toBe(true);
  });

  test('Form Component appears when toggleForm fired', () => {
    const todo = mount(<Todo todo_list={todo_lists[0]} num={0} />);
    todo.find('.add-button-text').simulate('click');
    expect(todo.containsMatchingElement(<Form />)).toBe(true);
  });

  // showTodoMenu
  test('todo-menu appears when showTodoMenu fired', () => {
    const todo = mount(<Todo todo_list={todo_lists[0]} num={0} />);
    todo.find('.menu-ellipsis').simulate('click');
    expect(todo.find('.todo-menu')).toHaveLength(1);
  });
});
