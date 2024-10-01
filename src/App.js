import React from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Business Card Generator</h1>
        <p>Fill out the form to generate a business card</p>
      </header>
      <main>
        <BusinessCard />
      </main>

      <footer className="App-footer">
        <p>© 2024 Business Card Generator</p>
      </footer>
    </div>
  );
}

export default App;