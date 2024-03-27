import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Pages/Home';
import  About  from './Pages/AboutUs';
import  Features  from './Pages/Features';
import { GetApplication } from './Pages/GetApplication';
import  GetInTouch  from './Pages/GetInTouch';
import { Layout } from './layout/layout';
import Vegabond from './Images/Vega.gif'
import "./index.css"
import ScrollPage from '../src/Scrollanimation/Scrollanimation';


function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <div className="overlay">
    <div className="element">
    {loading ? (
      <div className="container">
        <div className="row">
          <div className='col-md-12 loader-adjustment'>
            <img src={Vegabond}  loading={loading} />
          </div>
        </div>
      </div>
    ) : (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<ScrollPage/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/getapplication" element={<GetApplication />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Route>
         </Routes>
      </BrowserRouter>
    )}
      </div>
      </div>

  );
}

export default App;
