import React from 'react';

import BookWrapper from '../components/BookWrapper';
import CategoryField from '../components/CategoryField';
import FilterField from '../components/FilterField';
import Pagination from '../components/Pagination';

import { BookType, CategoryType, ParamType } from '../types';

type Props = {
  categories: [] | CategoryType[];
  books: [] | BookType[];
  params: ParamType;
  setParams: React.Dispatch<React.SetStateAction<ParamType>>;
  filteredBooks: [] | BookType[];
  setFilteredBooks: React.Dispatch<React.SetStateAction<[] | BookType[]>>;
};

const Home = ({
  categories,
  books,
  params,
  setParams,
  filteredBooks,
  setFilteredBooks,
}: Props) => {
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

  const currentCategory =
    categories.find((category) => Number(category.id) === params.categoryId)
      ?.name ?? 'No category selected';

  return (
    <div>
      <CategoryField categories={categories} setParams={setParams} />
      <FilterField search={handleSearch} currentCategory={currentCategory} />
      <BookWrapper books={filteredBooks} />
      <Pagination currentPage={params.page} setPage={setParams} />
    </div>
  );
};

export default Home;
