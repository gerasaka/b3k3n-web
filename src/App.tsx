// TODO: implement semantic tag HTMLs

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';

import { CategoryType, ParamType, BookType } from './types';
import { getBooks, getCategories } from './utils/api';

function App() {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);
  const [params, setParams] = useState<ParamType>({
    categoryId: 1,
    page: 0,
  });

  const [books, setBooks] = useState<BookType[] | []>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookType[] | []>([]);

  const [bookmarkedBooks, setBookmarkedBooks] = useState<BookType[] | []>([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));

    const bookmark: string = localStorage.getItem('b3k3n-books') || '[]';
    if (bookmark.length > 2) setBookmarkedBooks(JSON.parse(bookmark));
  }, []);

  useEffect(() => {
    getBooks(params).then((books) => {
      setBooks(books);
      setFilteredBooks(books);
    });
  }, [params]);

  return (
    <div className="py-4 max-w-5xl mx-auto">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categories={categories}
              books={books}
              params={params}
              setParams={setParams}
              filteredBooks={filteredBooks}
              setFilteredBooks={setFilteredBooks}
            />
          }
        />
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
