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

  test('show card with book data', async () => {
    render(<App />);

    const bookCover = await screen.findAllByRole('img');
    const bookTitle = screen.getByText(/The Intelligent Investor/i);
    const bookAuthors = screen.getByText(/Benjamin Graham/i);

    expect(bookCover).toHaveLength(4);
    expect(bookTitle).toBeInTheDocument();
    expect(bookAuthors).toBeInTheDocument();
  });
});

describe('API', () => {
  test('show response from sejutacita category API', async () => {
    render(<App />);

    const listOfCategories = await screen.findAllByRole('radio');
    const firstCategory = screen.getByText('Happiness \u0026 Mindfulness');
    const secondCategory = screen.getByText('Career \u0026 Business');

    expect(listOfCategories).toHaveLength(5);
    expect(firstCategory).toBeInTheDocument();
    expect(secondCategory).toBeInTheDocument();
  });

  test('show response from sejutacita book API', async () => {
    render(<App />);

    const renderItems = await Promise.all([
      screen.findAllByRole('img'),
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
