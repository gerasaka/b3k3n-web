import React from 'react';

import logo from '../assets/sejutacita-logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between mb-4">
      <a href="/">
        <img src={logo} alt="logo" className="h-10" />
      </a>
      <a href="/bookmark" className="self-center">
        Bookmark
      </a>
    </nav>
  );
};

export default Navbar;
