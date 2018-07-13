import * as React from 'react';
import NonAuth from '../../NonAuth';
import renderer from 'react-test-renderer';

test('it renders correctly', () => {
  const tree = renderer.create(
    <NonAuth />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
