import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CardForm from './components/form';
import BusinessCardPage from './components/card-page';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Business Card Generator</h1>
      </header>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<CardForm setFormData={setFormData} />} />
            <Route
              path="/business-card"
              element={
                formData ? <BusinessCardPage formData={formData} /> : <Navigate to="/" replace />
              }
            />
            {/* Fallback Route for 404 - Page Not Found */}
            <Route path="*" element={<div><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </main>
      </Router>
      <footer className="App-footer">
        <p>&copy; 2024 Business Card Generator</p>
      </footer>
    </div>
  );
}

export default App;