import React from 'react';

const PageControl = () => {
  return (
    <div>
      <h2>Happiness & Mindfullness</h2>
      <hr />
      <input type="search" name="search" id="search" />
      <select name="sort" id="sort">
        <option value="ascending">A - Z</option>
        <option value="descending">Z - A</option>
      </select>
    </div>
  );
};

export default PageControl;
