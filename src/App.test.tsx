import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App show response from sejutacita API', async () => {
  render(<App />);

  const renderItems = await Promise.all([
    screen.findAllByRole('listitem'),
    screen.findByText('Happiness \u0026 Mindfulness'),
    screen.findByText('Career \u0026 Business'),
  ]);

  const listOfCategories = renderItems[0];
  const firstCategory = renderItems[1];
  const secondCategory = renderItems[2];

  expect(listOfCategories).toHaveLength(5);
  expect(firstCategory).toBeInTheDocument();
  expect(secondCategory).toBeInTheDocument();
});
