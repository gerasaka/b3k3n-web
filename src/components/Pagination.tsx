import React from 'react';

import { ParamType } from '../types/param.type';

type Props = {
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<ParamType>>;
};

const Pagination = ({ currentPage, setPage }: Props) => {
  let pageBefore = (
    <>
      <button className="invisible">0</button>
      <button className="invisible">0</button>
    </>
  );

  const handlePageChange = (page: number) => {
    setPage((prev) => ({ ...prev, page }));
  };

  if (currentPage > 1) {
    pageBefore = (
      <>
        <button
          className="font-serif text-lg"
          onClick={() => handlePageChange(currentPage - 2)}
        >
          {currentPage - 1}
        </button>
        <button
          className="font-serif text-lg"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {currentPage}
        </button>
      </>
    );
  } else if (currentPage > 0) {
    pageBefore = (
      <>
        <button className="invisible">0</button>
        <button
          className="font-serif text-lg"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {currentPage}
        </button>
      </>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <hr className="my-4" />
      <div className="flex gap-6 justify-center">
        {pageBefore}
        <button>
          <span className="before:block before:absolute before:-inset-1 before:rounded-full before:h-7 before:w-7 before:-left-3 before:top-1 before:bg-sinbad relative inline-block">
            <span className="relative text-2xl font-medium font-serif">
              {currentPage + 1}
            </span>
          </span>
        </button>
        <button
          className="font-serif text-lg"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {currentPage + 2}
        </button>
        <button
          className="font-serif text-lg"
          onClick={() => handlePageChange(currentPage + 2)}
        >
          {currentPage + 3}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
