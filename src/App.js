import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavButtons from './components/NavButtons';
import CoverLetter from './components/CoverLetter';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-left">
            <div className="logo">
              <h2>MySite</h2>
            </div>
            <NavButtons />
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <main>
                <CoverLetter />
              </main>
              <Footer />
            </>
          } />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;