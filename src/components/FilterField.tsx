import React from 'react';

type Props = {
  search: (query: string) => void;
  currentCategory: string;
};

const FilterField = ({ search, currentCategory }: Props) => {
  return (
    <div className="lg:max-w-2xl mx-auto mb-4 mt-4 lg:mb-8 lg:mt-8">
      <h2 className="font-serif text-2xl text-center lg:text-left lg:text-4xl">
        {currentCategory}
      </h2>
      <hr className="text-gainsboro my-2 lg:my-4" />
      <div className="flex gap-2 lg:gap-6 text-sm">
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
