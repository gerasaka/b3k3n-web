import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

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
  const [books, setBooks] = useState<bookType[]>();

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
      <div>
        <h2>Select Category</h2>
        {categories ? (
          categories.map((category) => {
            return (
              <div key={category.id}>
                <input
                  type="radio"
                  name="category"
                  value={category.name.toLowerCase()}
                  id={category.name.toLowerCase()}
                />
                <label htmlFor={category.name.toLocaleLowerCase()}>
                  {category.name}
                </label>
              </div>
            );
          })
        ) : (
          <p>No category at this time</p>
        )}
      </div>
      <div>
        <h1>Happiness & Mindfullness</h1>
        <hr />
        <input type="search" name="search" id="" />
        <select name="sort" id="sort">
          <option value="ascending">A - Z</option>
          <option value="deescending">Z - A</option>
        </select>
      </div>
      <div>
        {books ? (
          books.map((book) => {
            return (
              <div key={book.id}>
                <img src={book.cover_url} alt={book.title.toLowerCase()} />
                <h2>{book.title}</h2>
                <p>{book.authors.join(',')}</p>
              </div>
            );
          })
        ) : (
          <h2>Hello the second world</h2>
        )}
      </div>
    </>
  );
}

export default App;
