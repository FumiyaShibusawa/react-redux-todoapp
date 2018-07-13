import * as React from 'react';
import Login from '../../NonAuth/Login';
import renderer from 'react-test-renderer';

test('it renders correctly', () => {
  const tree = renderer.create(
    <Login />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
