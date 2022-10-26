import React from 'react';

const PageControl = () => {
  return (
    <div className="max-w-2xl mx-auto mb-12 mt-8">
      <h2 className="font-serif text-4xl">Happiness & Mindfullness</h2>
      <hr className="my-4" />
      <div className="flex gap-6">
        <input
          type="search"
          name="search"
          id="search"
          className="h-8 px-3 grow rounded-lg bg-gainsboro"
        />
        <select
          name="sort"
          id="sort"
          className="h-8 px-3 rounded-lg bg-gainsboro"
        >
          <option value="ascending">A - Z</option>
          <option value="descending">Z - A</option>
        </select>
      </div>
    </div>
  );
};

export default PageControl;
