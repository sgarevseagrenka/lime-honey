import React from 'react';
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Popular from './components/Popular';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <div className="wrapper">
        <main className="main">
          <div className="main__container">
            <Header></Header>
            <About></About>
            <Popular></Popular>
            <Contact></Contact>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;