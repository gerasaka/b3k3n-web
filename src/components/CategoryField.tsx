import React from 'react';

const CategoryField = () => {
  return (
    <div>
      <p>Select Category</p>
      <div>
        <input type="radio" id="category-1" name="category" />
        <label htmlFor="category-1">Category 1</label>

        <input type="radio" id="category-2" name="category" />
        <label htmlFor="category-2">Category 2</label>

        <input type="radio" id="category-3" name="category" />
        <label htmlFor="category-3">Category 3</label>
      </div>
    </div>
  );
};

export default CategoryField;
