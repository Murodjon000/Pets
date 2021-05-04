import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../../Components/Details'

test('should correctly render Details page', () => {
  const component = renderer.create(<Details />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});