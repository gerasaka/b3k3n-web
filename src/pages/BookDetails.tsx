// TODO: add hover state to sections

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BookType } from '../types';

type Props = {
  bookmarkList: BookType[] | [];
  setBookmarkList: React.Dispatch<React.SetStateAction<[] | BookType[]>>;
};

type Section = {
  title: string;
  content: string;
};

const BookDetails = ({ bookmarkList, setBookmarkList }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const book = useLocation().state;

  useEffect(() => {
    if (bookmarkList.find((bookmarkedBook) => bookmarkedBook.id === book.id)) {
      setIsBookmarked(!isBookmarked);
    }
  }, [bookmarkList, isBookmarked, book.id]);

  const handleToogleBookmark = () => {
    if (isBookmarked) removeFromBookmarkList();
    else addToBookmarkList();

    setIsBookmarked(!isBookmarked);
  };

  const addToBookmarkList = () => {
    setBookmarkList((prev) => [...prev, book]);
  };

  const removeFromBookmarkList = () => {
    const filteredBooks = bookmarkList.filter((list) => list.id !== book.id);
    setBookmarkList(filteredBooks);
    localStorage.setItem('b3k3n-books', JSON.stringify(filteredBooks));
  };

  return (
    <div className="mt-8 w-10/12 mx-auto">
      <div className="flex gap-10">
        <img src={book.cover_url} alt="book cover" className="w-72" />
        <div>
          <h1 className="font-serif text-4xl">{book.title}</h1>
          <h3 className="text-xl mb-4 mt-2">{book.authors.join(', ')}</h3>

          <div className="w-2/3 flex gap-6">
            <button className="h-9 w-full rounded-lg bg-sinbad">Listen</button>
            <button className="h-9 w-full rounded-lg bg-paradiso text-seashell-peach">
              Read
            </button>
          </div>

          <div className="flex gap-6 items-center border-t-2 border-b-2 border-gainsboro p-1 my-4">
            <p>{book.sections.length} chapters</p>
            <p>{Math.ceil(book.audio_length / 60)} minutes</p>
            <button
              className="h-8 px-3 rounded-lg ml-auto"
              onClick={handleToogleBookmark}
            >
              Bookmark
              <span className="p-2 m-2">O</span>
            </button>
          </div>

          <h2 className="font-serif text-2xl mb-2">What's it about</h2>
          <p>{book.description}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl my-4">What's inside</h2>
        {book.sections.map((section: Section, idx: string) => (
          <div key={idx}>
            <input
              type="checkbox"
              id={idx}
              className="w-full max-w-4xl mx-auto h-5 inset-x-0 peer checked:bg-gainsboro absolute hidden peer"
            />
            <label htmlFor={idx} className="block h-5 pb-10 pt-4 font-bold">
              {`${idx + 1} ${section.title}`}
            </label>
            <span className="hidden peer-checked:block p-2 bg-sinbad">
              {section.content}
            </span>
            <hr className="text-gainsboro" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
