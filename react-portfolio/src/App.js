import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Nav from './components/nav'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'

function App() {
  const [ contactSelected, setContactSelected ] = useState(false);

  return (
    <div className="App">
      <Nav
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Projects></Projects>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
