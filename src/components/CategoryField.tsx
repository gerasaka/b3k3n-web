import React from 'react';

const CategoryField = () => {
  return (
    <div className="text-center">
      <p className="text-xl font-bold mb-4">Select Category</p>
      <div className="flex justify-around">
        <input
          type="radio"
          id="category-1"
          name="category"
          className="hidden"
        />
        <label
          htmlFor="category-1"
          className="bg-paradiso text-seashell-peach py-3 px-8 rounded-full"
        >
          Category 1
        </label>

        <input
          type="radio"
          id="category-2"
          name="category"
          className="hidden"
        />
        <label
          htmlFor="category-2"
          className="bg-gainsboro py-3 px-8 rounded-full"
        >
          Category 2
        </label>

        <input
          type="radio"
          id="category-3"
          name="category"
          className="hidden"
        />
        <label
          htmlFor="category-3"
          className="bg-gainsboro py-3 px-8 rounded-full"
        >
          Category 3
        </label>
      </div>
    </div>
  );
};

export default CategoryField;
