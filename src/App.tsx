import React, { useEffect, useState } from 'react';

import CategoryField from './components/CategoryField';
import Navbar from './components/Navbar';
import PageControl from './components/PageControl';

import { CategoryType } from './types/category.type';
import { BookType } from './types/book.type';

function App() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    fetch('/fee-assessment-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch('/fee-assessment-books?categoryId=1&page=1&size=20')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-4 max-w-5xl mx-auto">
      <Navbar />
      <CategoryField categories={categories} />

      <PageControl>
        <div>
          {books.map((book) => {
            return (
              <div key={book.id}>
                <img src={book.cover_url} alt={book.title.toLowerCase()} />
                <h2>{book.title}</h2>
                <p>{book.authors.join(',')}</p>
              </div>
            );
          })}
        </div>
      </PageControl>
    </div>
  );
}

export default App;
