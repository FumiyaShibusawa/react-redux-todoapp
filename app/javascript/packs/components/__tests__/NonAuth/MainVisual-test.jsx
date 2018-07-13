import * as React from 'react';
import MainVisual from '../../NonAuth/MainVisual';
import renderer from 'react-test-renderer';

test('it renders correctly', () => {
  const tree = renderer.create(
    <MainVisual />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
