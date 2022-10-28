import React, { useEffect, useState } from 'react';

import BookCard from '../components/BookCard';
import CategoryField from '../components/CategoryField';
import Navbar from '../components/Navbar';
import PageControl from '../components/PageControl';
import Pagination from '../components/Pagination';

import { BookType } from '../types/book.type';
import { CategoryType } from '../types/category.type';
import { ParamType } from '../types/param.type';

import { getBooks, getCategories } from '../utils/api';

const Home = () => {
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
    <div>
      <Navbar />
      <CategoryField categories={categories} setParams={setParams} />
      <PageControl />
      <BookCard books={books} />
      <Pagination currentPage={params.page} setPage={setParams} />
    </div>
  );
};

export default Home;
