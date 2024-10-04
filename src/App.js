import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardForm from './components/form';
import BusinessCardPage from './components/BusinessCardPage';
import './App.css';

function App() {

  const [formData, setFormData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Business Card Generator</h1>
        <p>Fill out the form to generate a business card</p>
      </header>
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<CardForm setFormData={setFormData} />} />
            <Route path='/BusinessCardPage' element={<BusinessCardPage formData={formData} />} />
            <Route/>
          </Routes>
        </Router>
      </main>
      <footer className="App-footer">
        <p>© 2024 Business Card Generator</p>
      </footer>
    </div>
  );
}

export default App;