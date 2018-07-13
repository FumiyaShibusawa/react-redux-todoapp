import * as React from 'react';
import SignupWithErrorBoundary from '../../NonAuth/Signup';
import renderer from 'react-test-renderer';

test('it renders correctly', () => {
  const tree = renderer.create(
    <SignupWithErrorBoundary />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
