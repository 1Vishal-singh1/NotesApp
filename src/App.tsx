import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import MyComponent from './components/MyComponent';
import Home from './components/Home';
import About from './components/About';
import Notescreen from './components/Notescreen';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <MyComponent/>    
      <Routes>
      <Route path="/" element={<Home name="Vishal" />} />
      <Route path="/about" element={<About />} />
      <Route path="/notescreen" element={<Notescreen/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
