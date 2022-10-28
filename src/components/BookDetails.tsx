import React from 'react';
import Navbar from './Navbar';

const BookDetails = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src="" alt="" />
        <div>
          <h1>Book Title</h1>
          <h3>Book Author</h3>

          <button>Listen</button>
          <button>Read</button>

          <div>
            <p>x chapters</p>
            <p>x minutes</p>
            <button>bookmark</button>
          </div>

          <h2>What's it about</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            suscipit molestiae non, velit unde iste. Ut asperiores, quidem,
            aspernatur dolorem accusamus quam est possimus reprehenderit in,
            nihil earum labore perferendis?
          </p>

          <h2>What's inside</h2>
          <div>
            <button>1 intro</button>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              inventore laudantium dolorum fuga laboriosam saepe, quibusdam ipsa
              voluptatum expedita quo ipsam, cum maiores rerum veniam
              voluptatem. Voluptate ab reiciendis officiis!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
