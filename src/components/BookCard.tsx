import React from 'react';
import { Link } from 'react-router-dom';

import { BookType } from '../types';

type Props = {
  book: BookType;
};

const BookCard = ({ book }: Props) => {
  return (
    <div key={book.id} className="basis-0">
      <Link to={`/books/${book.id}`} state={book} className="cursor-pointer">
        <img
          src={book.cover_url}
          alt={book.title.toLowerCase()}
          className="m-auto mb-1 w-full"
        />
        <h2 className="font-medium text-sm lg:text-base">{book.title}</h2>
        <p className="text-xs">{book.authors.join(', ')}</p>
      </Link>
    </div>
  );
};

export default BookCard;
