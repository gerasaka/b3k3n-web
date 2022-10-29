import React from 'react';
import { Link } from 'react-router-dom';
import { BookType } from '../types/book.type';

type Props = {
  books: BookType[];
};

const BookCard = ({ books }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-6 content-center max-w-4xl m-auto">
      {books.map((book) => {
        return (
          <div key={book.id} className="basis-0">
            <Link
              to={`/books/${book.id}`}
              state={book}
              className="cursor-pointer"
            >
              <img
                src={book.cover_url}
                alt={book.title.toLowerCase()}
                className="m-auto mb-1 w-full"
              />
              <h2 className="font-medium">{book.title}</h2>
              <p className="text-xs">{book.authors.join(', ')}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BookCard;
