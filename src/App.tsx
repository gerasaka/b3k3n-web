import React, { useEffect, useState } from 'react';

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
      <div>
        {categories ? (
          categories.map((category) => {
            return (
              <div key={category.id}>
                <input
                  type="radio"
                  name="category"
                  id={category.name.toLowerCase()}
                />
                <label htmlFor={category.name.toLocaleLowerCase()}>
                  {category.name}
                </label>
              </div>
            );
          })
        ) : (
          <h1>Hello World</h1>
        )}
      </div>
      <div>
        {books ? (
          <ul>
            {books.map((book) => {
              return <li key={book.id}>{book.title}</li>;
            })}
          </ul>
        ) : (
          <h2>Hello the second world</h2>
        )}
      </div>
    </>
  );
}

export default App;
