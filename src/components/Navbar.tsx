import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/sejutacita-logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between mb-4">
      <Link to={'/'}>
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <Link to="/bookmark" className="self-center">
        Bookmark
      </Link>
    </nav>
  );
};

export default Navbar;
