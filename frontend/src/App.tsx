import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login/>}></Route>
        <Route path="/home" element={
          <>
            <Header/>
            <Home/>
          </>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
