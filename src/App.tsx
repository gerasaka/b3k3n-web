import React, { useEffect, useState } from 'react';
import CategoryField from './components/CategoryField';
import Navbar from './components/Navbar';
import PageControl from './components/PageControl';

type categoryType = {
  id: string;
  name: string;
};

type bookType = {
  id: number;
  title: string;
  categoryId: number;
  authors: [];
  cover_url: string;
  description: string;
  sections: [];
  audio_length: number;
};

function App() {
  const [categories, setCategories] = useState<categoryType[]>();
  const [books, setBooks] = useState<bookType[]>([]);

  useEffect(() => {
    fetch('/fee-assessment-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch('/fee-assessment-books?categoryId=1&page=1&size=20')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <Navbar />
      <CategoryField />

      <PageControl>
        <div>
          {books.map((book) => {
            return (
              <div key={book.id}>
                <img src={book.cover_url} alt={book.title.toLowerCase()} />
                <h2>{book.title}</h2>
                <p>{book.authors.join(',')}</p>
              </div>
            );
          })}
        </div>
      </PageControl>
    </>
  );
}

export default App;
