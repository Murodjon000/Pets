import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from '../../Components/Details'

test('should render the Details component', () => {
  render(<Details />);
  const details = screen.getByTestId('details-loading');
  expect(details).toHaveTextContent('Loading....');
});