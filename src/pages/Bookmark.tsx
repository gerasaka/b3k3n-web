import React from 'react';

import BookCard from '../components/BookCard';
import Navbar from '../components/Navbar';
import { BookType } from '../types/book.type';

type Props = {
  books: BookType[];
};

const Bookmark = ({ books }: Props) => {
  return (
    <>
      <Navbar />
      <p className="text-xl font-bold mb-4">Select Category</p>
      <BookCard books={books} />
    </>
  );
};

export default Bookmark;
