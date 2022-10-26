import React from 'react';
import Pagination from './Pagination';

type Props = {
  children: React.ReactNode;
};

const PageControl = ({ children }: Props) => {
  return (
    <div>
      <h2>Happiness & Mindfullness</h2>
      <hr />
      <input type="search" name="search" id="search" />
      <select name="sort" id="sort">
        <option value="ascending">A - Z</option>
        <option value="descending">Z - A</option>
      </select>
      {children}
      <Pagination />
    </div>
  );
};

export default PageControl;
