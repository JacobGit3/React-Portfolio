import './App.css';
import React, { useState } from 'react';
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
