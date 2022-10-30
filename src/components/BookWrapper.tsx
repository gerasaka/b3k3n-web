import React from 'react';

import BookCard from './BookCard';

import { BookType } from '../types';

type Props = {
  books: BookType[];
};

const BookWrapper = ({ books }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-6 content-center max-w-4xl m-auto">
      {books.map((book) => {
        return <BookCard book={book} />;
      })}
    </div>
  );
};

export default BookWrapper;
