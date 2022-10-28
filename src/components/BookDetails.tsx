import React from 'react';
import Navbar from './Navbar';

const BookDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-10">
        <img
          src="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png"
          alt="book cover"
          className="w-72"
        />
        <div>
          <h1 className="font-serif text-4xl">Book Title</h1>
          <h3 className="text-xl mb-4">Book Author</h3>

          <button className="h-8 px-3 rounded-lg bg-gainsboro">Listen</button>
          <button className="h-8 px-3 rounded-lg bg-gainsboro">Read</button>

          <div className="flex gap-6 items-center border-t-2 border-b-2 p-1 my-4">
            <p>8 chapters</p>
            <p>17 minutes</p>
            <button className="h-8 px-3 rounded-lg bg-gainsboro">
              bookmark
            </button>
          </div>

          <h2 className="font-serif text-2xl">What's it about</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            suscipit molestiae non, velit unde iste. Ut asperiores, quidem,
            aspernatur dolorem accusamus quam est possimus reprehenderit in,
            nihil earum labore perferendis?
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl my-4">What's inside</h2>
        <div>
          <input
            type="checkbox"
            id="0"
            className="w-full max-w-4xl mx-auto h-5 inset-x-0 peer checked:bg-gainsboro absolute hidden peer"
          />
          <label htmlFor="0" className="block h-5 mb-2">
            1 intro
          </label>
          {/* <button className="w-full text-left font-medium peer :bg-gainsboro">1 intro</button> */}
          <span className="hidden peer-checked:block p-2 bg-sinbad">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            inventore laudantium dolorum fuga laboriosam saepe, quibusdam ipsa
            voluptatum expedita quo ipsam, cum maiores rerum veniam voluptatem.
            Voluptate ab reiciendis officiis!
          </span>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
