import * as React from 'react';
import TodoListContainer from '../../containers/TodoListContainer';
import { Provider } from "react-redux"
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../../../reducers"
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

test('it renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <TodoListContainer />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
