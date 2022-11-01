import React from 'react';
import { Link } from 'react-router-dom';
import {Bookmark} from 'lucide-react'

import logo from '../assets/sejutacita-logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between mb-4">
      <Link to={'/'}>
        <img src={logo} alt="logo" className="h-8 sm:h-10" />
      </Link>
      <Link to="/bookmark" className="self-center">
        <p className="text-sm lg:text-base">Bookmark<Bookmark fill='#E2824F' className='inline mx-1 text-terracota' /></p>
      </Link>
    </nav>
  );
};

export default Navbar;
