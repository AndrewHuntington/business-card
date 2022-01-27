import React from 'react';
import { render, screen } from '@testing-library/react';
import Info from '../Info';

test('renders profile pic', () => {
  render(<Info />);
  const pic = screen.getByAltText(/head shot/i);
  expect(pic).toBeInTheDocument();
});
