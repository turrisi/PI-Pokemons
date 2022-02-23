import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing'
import Home from './Components/home';
import Create from './Components/pokeCreate';
import Card from './Components/Card/card';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path='/home' element = {<Home/>}/>
        <Route exact path="/create" element={<Create/>} />
        <Route exact path='/details/:id' element={<Card/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
