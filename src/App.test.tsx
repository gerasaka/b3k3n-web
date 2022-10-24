import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App show respon from sejutacita API', async () => {
  render(<App />);

  const firstCategory = screen.getByText('Happiness \u0026 Mindfulness');
  const secondCategory = screen.getByText('Career \u0026 Business');

  expect(firstCategory).toBeInTheDocument();
  expect(secondCategory).toBeInTheDocument();
});
