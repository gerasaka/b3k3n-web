import React, { useEffect, useState } from 'react';

import CategoryField from './components/CategoryField';
import Navbar from './components/Navbar';
import PageControl from './components/PageControl';
import BookCard from './components/BookCard';
import Pagination from './components/Pagination';

import { CategoryType } from './types/category.type';
import { BookType } from './types/book.type';

import { getCategories, getBooks } from './utils/api';

function App() {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);
  const [books, setBooks] = useState<BookType[] | []>([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
    getBooks().then((books) => setBooks(books));
  }, []);

  return (
    <div className="py-4 max-w-5xl mx-auto">
      <Navbar />
      <CategoryField categories={categories} />
      <PageControl />
      <BookCard books={books} />
      <Pagination />
    </div>
  );
}

export default App;
