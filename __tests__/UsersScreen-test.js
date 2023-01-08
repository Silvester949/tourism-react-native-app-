import React from 'react';
import renderer from 'react-test-renderer';
import UsersScreen from '../src/screens/UsersScreen/UsersScreen.component';

test('renders correctly', () => {
  const tree = renderer.create(<UsersScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
