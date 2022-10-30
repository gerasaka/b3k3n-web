import React from 'react';

import BookWrapper from '../components/BookWrapper';

import { BookType } from '../types';

type Props = {
  books: BookType[];
};

const Bookmark = ({ books }: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-xl font-bold mb-8 text-center">Bookmarked Books</h1>
      {books.length === 0 ? (
        <p className="text-2xl text-terracota">Noting to see</p>
      ) : (
        <BookWrapper books={books} />
      )}
    </div>
  );
};

export default Bookmark;
