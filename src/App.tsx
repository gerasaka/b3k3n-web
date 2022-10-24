import React, { useEffect, useState } from 'react';

type categoryType = {
  id: string;
  name: string;
};

function App() {
  const [categories, setCategories] = useState<categoryType[]>();

  useEffect(() => {
    fetch('/fee-assessment-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return categories ? (
    <ul>
      {categories.map((category) => {
        return <li>{category.name}</li>;
      })}
    </ul>
  ) : (
    <h1>Hello World</h1>
  );
}

export default App;
