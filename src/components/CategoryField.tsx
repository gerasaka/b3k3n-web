import React, { useState } from 'react';

import { CategoryType, ParamType } from '../types';

type Props = {
  categories: CategoryType[];
  setParams: React.Dispatch<React.SetStateAction<ParamType>>;
};

const CategoryField = ({ categories, setParams }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryChange = (id: string) => {
    setParams({ categoryId: Number(id), page: 0 });
    setSelectedCategory(Number(id));
  };

  return (
    <div className="text-center">
      <p className="text-xl font-bold mb-4">Select Category</p>

      <div className="flex justify-center flex-wrap gap-4">
        {categories.map((category) => {
          const selected = selectedCategory === Number(category.id);

          return (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`${
                selected ? 'bg-paradiso text-seashell-peach' : 'bg-gainsboro'
              } text-sm py-2 px-6 rounded-full`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryField;
