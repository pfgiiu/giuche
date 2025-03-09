import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import OrganizationPage from './pages/OrganizationPage'; // Nova página
import './components/styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/organization" element={<OrganizationPage />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;