import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';

import Home from './pages/Home'
import Detail from './pages/Detail'

import './App.css';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
