import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Pages/Home';
import  About  from './Pages/AboutUs';
import  Features  from './Pages/Features';
import { GetApplication } from './Pages/GetApplication';
import { GetInTouch } from './Pages/GetInTouch';
import { Layout } from './layout/layout';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/getapplication" element={<GetApplication />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
