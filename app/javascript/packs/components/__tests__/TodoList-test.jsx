import * as React from 'react';
import TodoList from '../TodoList';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

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
  test('is a valid React Element', () => {
    const isValidElement = ReactTestUtils.isElement(<TodoList
      todo_lists={todo_lists}
    />);
    expect(isValidElement).toBe(true);
  });

});
