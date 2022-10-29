// TODO: add hover state to sections

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './Navbar';

import { BookType } from '../types/book.type';

type Props = {
  bookmarkList: BookType[] | [];
  setBookmark: React.Dispatch<React.SetStateAction<[] | BookType[]>>;
};

type Section = {
  title: string;
  content: string;
};

const BookDetails = ({ bookmarkList, setBookmark }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const book = useLocation().state;

  useEffect(() => {
    if (bookmarkList.find((bookmarkedBook) => bookmarkedBook.id === book.id)) {
      setIsBookmarked(!isBookmarked);
    }
  }, []);

  const handleToogleBookmark = () => {
    setBookmark((prev) => [...prev]);
  };

  return (
    <div>
      <Navbar />
      <div className="flex gap-10">
        <img src={book.cover_url} alt="book cover" className="w-72" />
        <div>
          <h1 className="font-serif text-4xl">{book.title}</h1>
          <h3 className="text-xl mb-4">{book.authors.join(', ')}</h3>

          <button className="h-8 px-3 rounded-lg bg-gainsboro">Listen</button>
          <button className="h-8 px-3 rounded-lg bg-gainsboro">Read</button>

          <div className="flex gap-6 items-center border-t-2 border-b-2 p-1 my-4">
            <p>{book.sections.length} chapters</p>
            <p>{book.audio_length / 60} minutes</p>
            <button className="h-8 px-3 rounded-lg bg-gainsboro">
              bookmark
            </button>
          </div>

          <h2 className="font-serif text-2xl">What's it about</h2>
          <p>{book.description}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl my-4">What's inside</h2>
        {book.sections.map((section: Section, idx: string) => (
          <div key={idx}>
            <input
              type="checkbox"
              id={idx}
              className="w-full max-w-4xl mx-auto h-5 inset-x-0 peer checked:bg-gainsboro absolute hidden peer"
            />
            <label htmlFor={idx} className="block h-5 mb-2">
              {`${idx + 1} ${section.title}`}
            </label>
            <span className="hidden peer-checked:block p-2 bg-sinbad">
              {section.content}
            </span>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
