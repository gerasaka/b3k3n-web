// TODO: implement semantic tag HTMLs

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import BookDetails from './components/BookDetails';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';

import { BookType } from './types/book.type';

function App() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState<BookType[] | []>([]);

  useEffect(() => {
    const bookmark: string = localStorage.getItem('b3k3n-books') || '[]';

    if (bookmark.length > 2) setBookmarkedBooks(JSON.parse(bookmark));
  }, []);

  return (
    <div className="py-4 max-w-5xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books/:id"
          element={
            <BookDetails
              bookmarkList={bookmarkedBooks}
              setBookmarkList={setBookmarkedBooks}
            />
          }
        />
        <Route
          path="/bookmark"
          element={<Bookmark books={bookmarkedBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
