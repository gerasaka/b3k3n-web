import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App properly', () => {
  render(<App />);
  const heading = screen.getByText('Hello World');
  expect(heading).toBeInTheDocument();
});
