import React from 'react';

import BookWrapper from '../components/BookWrapper';
import Navbar from '../components/Navbar';

import { BookType } from '../types';

type Props = {
  books: BookType[];
};

const Bookmark = ({ books }: Props) => {
  return (
    <>
      <Navbar />
      <p className="text-xl font-bold mb-4">Select Category</p>
      <BookWrapper books={books} />
    </>
  );
};

export default Bookmark;
