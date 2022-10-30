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

  const [filteredBooks, setFilteredBooks] = useState<BookType[] | []>([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  useEffect(() => {
    getBooks(params).then((books) => {
      setBooks(books);
      setFilteredBooks(books);
    });
  }, [params]);

  const handleSearch = (query: string) => {
    const isTitleMatch = (title: string) => title.toLowerCase().includes(query);
    const isAuthorMatch = (authors: string[]) => {
      return (
        authors.filter((author) => author.toLowerCase().includes(query))
          .length > 0
      );
    };

    const searchBooks = books.filter(
      (book) => isTitleMatch(book.title) || isAuthorMatch(book.authors)
    );

    setFilteredBooks(searchBooks);
  };

  return (
    <div>
      <Navbar />
      <CategoryField categories={categories} setParams={setParams} />
      <PageControl search={handleSearch} />
      <BookCard books={filteredBooks} />
      <Pagination currentPage={params.page} setPage={setParams} />
    </div>
  );
};

export default Home;
