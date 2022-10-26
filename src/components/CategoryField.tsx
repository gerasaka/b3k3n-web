import React from 'react';

import { CategoryType } from '../types/category.type';

type Props = {
  categories: CategoryType[];
};

const CategoryField = ({ categories }: Props) => {
  return (
    <div className="text-center">
      <p className="text-xl font-bold mb-4">Select Category</p>

      <div className="flex justify-center flex-wrap gap-4">
        {categories.map((category) => {
          return (
            <>
              <input
                type="radio"
                value={category.id}
                name={category.name.toLowerCase()}
                className="hidden"
              />
              <label
                htmlFor={category.name.toLowerCase()}
                className="bg-gainsboro checked:bg-paradiso py-2 px-8 rounded-full"
              >
                {category.name}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryField;
