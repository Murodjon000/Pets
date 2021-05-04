import React from 'react';
import renderer from 'react-test-renderer';
import SearchPets from '../../Components/SearchPets';

test('should correctly render SearchPets page', () => {
  const component = renderer.create(<SearchPets />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
