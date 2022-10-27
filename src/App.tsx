import React, { useEffect, useState } from 'react';

import CategoryField from './components/CategoryField';
import Navbar from './components/Navbar';
import PageControl from './components/PageControl';
import BookCard from './components/BookCard';
import Pagination from './components/Pagination';

import { CategoryType } from './types/category.type';
import { BookType } from './types/book.type';
import { ParamType } from './types/param.type';

import { getCategories, getBooks } from './utils/api';

function App() {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);
  const [books, setBooks] = useState<BookType[] | []>([]);
  const [params, setParams] = useState<ParamType>({
    categoryId: 1,
    page: 0,
  });

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  useEffect(() => {
    getBooks(params).then((books) => setBooks(books));
  }, [params]);

  return (
    <div className="py-4 max-w-5xl mx-auto">
      <Navbar />
      <CategoryField categories={categories} setParams={setParams} />
      <PageControl />
      <BookCard books={books} />
      <Pagination currentPage={params.page} setPage={setParams} />
    </div>
  );
}

export default App;
