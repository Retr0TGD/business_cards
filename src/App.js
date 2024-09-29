import React from 'react';
import './App.css';
import CardForm from './components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Business Card Generator</h1>
        <p>Fill out the form to generate a business card</p>
      </header>
      <main>
        <CardForm />
      </main>

      <footer className="App-footer">
        <p>© 2024 Business Card Generator</p>
      </footer>
    </div>
  );
}

export default App;