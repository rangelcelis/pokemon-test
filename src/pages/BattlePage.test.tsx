import React from 'react';
import { render, screen } from '@testing-library/react';
import BattlePage from './BattlePage';

test('renders learn react link', () => {
  render(<BattlePage />);
  const linkElement = screen.getByText(/battle log/i);
  expect(linkElement).toBeInTheDocument();
});
