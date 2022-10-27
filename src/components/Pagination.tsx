import React from 'react';

type Props = {
  currentPage: number;
};

const Pagination = ({ currentPage }: Props) => {
  let pageBefore = (
    <>
      <button className="invisible">0</button>
      <button className="invisible">0</button>
    </>
  );

  if (currentPage > 1) {
    pageBefore = (
      <>
        <button className="font-serif text-lg">{currentPage}</button>
        <button className="font-serif text-lg">{currentPage - 1}</button>
      </>
    );
  } else if (currentPage > 0) {
    pageBefore = (
      <>
        <button className="invisible">0</button>
        <button className="font-serif text-lg">{currentPage}</button>;
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
        <button className="font-serif text-lg">{currentPage + 2}</button>
        <button className="font-serif text-lg">{currentPage + 3}</button>
      </div>
    </div>
  );
};

export default Pagination;
