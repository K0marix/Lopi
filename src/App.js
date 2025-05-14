import React from 'react';
import './App.css';
import NavButtons from './components/NavButtons';
import CoverLetter from './components/CoverLetter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <h2>MySite</h2>
          </div>
          <NavButtons />
        </div>
      </header>

      <main>
        <CoverLetter />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;