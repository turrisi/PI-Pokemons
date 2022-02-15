import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing'
import Home from './Components/home';
import Create from './Components/pokeCreate';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path='/home' element = {<Home/>}/>
        <Route exact path="/create" element={<Create/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
