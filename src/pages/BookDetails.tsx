// TODO: add hover state to sections

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Headphones,
  ListOrdered,
  Clock4,
  BookOpen,
  Bookmark,
} from 'lucide-react';

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
  }, []);

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
    <div className="mt-6 lg:mt-8 lg:w-10/12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
        <div className="mx-auto">
          <img
            src={book.cover_url}
            alt="book cover"
            className="h-60 lg:h-auto lg:w-72"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-serif text-2xl lg:text-4xl">{book.title}</h1>
          <h3 className="text-sm lg:text-xl mb-4 lg:mt-2">
            {book.authors.join(', ')}
          </h3>

          <div className="w-full lg:w-2/3 flex gap-4 lg:gap-6 text-sm lg:text-base align-middle">
            <button className="h-9 w-full rounded-lg bg-sinbad">
              <Headphones size={20} className="inline mx-1" />
              <span className="align-middle">Listen</span>
            </button>
            <button className="h-9 w-full rounded-lg bg-paradiso text-seashell-peach align-middle">
              <BookOpen size={20} className="inline mx-1" />
              <span className="align-middle text-seashell-peach">Read</span>
            </button>
          </div>

          <div className="flex gap-6 items-center border-t-2 border-b-2 border-gainsboro px-4 lg:p-1 mt-4 mb-2 lg:mb-4">
            <p className="text-xs lg:text-base align-middle">
              <ListOrdered size={20} className="inline mx-1" />
              <span className="align-middle">
                {book.sections.length} chapters
              </span>
            </p>
            <p className="text-xs lg:text-base">
              <Clock4 size={20} className="inline mx-1" />
              <span className="align-middle">
                {Math.ceil(book.audio_length / 60)} minutes
              </span>
            </p>
            <button
              className="h-8 px-3 rounded-lg ml-auto"
              onClick={handleToogleBookmark}
            >
              <span className="hidden lg:inline align-middle">Bookmark</span>
              <Bookmark
                size={20}
                className={`inline mx-1 ${
                  isBookmarked ? 'text-terracota' : 'text-gainsboro'
                }`}
              />
            </button>
          </div>

          <h2 className="font-serif text-xl lg:text-2xl mb-2">
            What's it about
          </h2>
          <p className="text-left px-2 lg:px-0 text-sm lg:text-base">
            {book.description}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-center lg:text-left text-xl lg:text-2xl mt-4 mb-2 lg:mb-4">
          What's inside
        </h2>
        {book.sections.map((section: Section, idx: string) => (
          <div key={idx} className="p-2 lg:p-0">
            <input
              type="checkbox"
              id={idx}
              className="w-full max-w-4xl mx-auto h-3 lg:h-5 inset-x-0 peer checked:bg-gainsboro absolute hidden peer"
            />
            <label
              htmlFor={idx}
              className="block h-3 lg:h-5 pb-10 lg:pt-4 font-bold text-sm lg:text-base"
            >
              {`${idx + 1} ${section.title}`}
            </label>
            <span className="hidden peer-checked:block p-2 bg-sinbad text-sm lg:text-base">
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
