import React from 'react';
import Pagination from './Pagination';

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
      <Pagination />
    </div>
  );
};

export default PageControl;
