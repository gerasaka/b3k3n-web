import React from 'react';

type Props = {
  search: (query: string) => void;
  currentCategory: string;
};

const FilterField = ({ search, currentCategory }: Props) => {
  return (
    <div className="max-w-2xl mx-auto mb-8 mt-8">
      <h2 className="font-serif text-4xl">{currentCategory}</h2>
      <hr className="my-4" />
      <div className="flex gap-6">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search this page by book title or author name"
          className="h-8 px-3 grow rounded-lg bg-gainsboro"
          onChange={(e) => search(e.target.value)}
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

export default FilterField;
