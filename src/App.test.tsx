import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Display', () => {
  test('show navbar', () => {
    render(<App />);

    const logo = screen.getByText(/b3k3n/i);
    const bookmarkBtn = screen.getByText(/bookmark/i);

    expect(logo).toBeInTheDocument();
    expect(bookmarkBtn).toBeInTheDocument();
  });

  test('show search field and sort button', () => {
    render(<App />);

    const searchField = screen.getByRole('searchbox');
    const sortButton = screen.getByRole('combobox');

    expect(searchField).toBeInTheDocument();
    expect(sortButton).toBeInTheDocument();
  });
});

describe('API', () => {
  test('show response from sejutacita category API', async () => {
    render(<App />);

    const renderItems = await Promise.all([
      screen.findAllByRole('radio'),
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

  test('show response from sejutacita book API', async () => {
    render(<App />);

    const renderItems = await Promise.all([
      screen.findAllByRole('listitem'),
      screen.findByText('The Intelligent Investor'),
      screen.findByText('Eat to Live'),
    ]);

    const listOfBooks = renderItems[0];
    const firstBook = renderItems[1];
    const secondBook = renderItems[2];

    expect(listOfBooks).toHaveLength(4);
    expect(firstBook).toBeInTheDocument();
    expect(secondBook).toBeInTheDocument();
  });
});
