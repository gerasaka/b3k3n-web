// TODO: implement semantic tag HTMLs

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import BookDetails from './components/BookDetails';
import Home from './pages/Home';

export const BookContext = React.createContext({});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
