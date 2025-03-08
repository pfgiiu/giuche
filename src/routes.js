import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SupplierManagement from './components/SupplierManagement';
import TeamManagement from './components/TeamManagement';
import BudgetManagement from './components/BudgetManagement';
import TicketSales from './components/TicketSales';
import CredentialManagement from './components/CredentialManagement';
import MarketingManagement from './components/MarketingManagement';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/suppliers" element={<SupplierManagement />} />
      <Route path="/dashboard/team" element={<TeamManagement />} />
      <Route path="/dashboard/budget" element={<BudgetManagement />} />
      <Route path="/dashboard/tickets" element={<TicketSales />} />
      <Route path="/dashboard/credentials" element={<CredentialManagement />} />
      <Route path="/dashboard/marketing" element={<MarketingManagement />} />
    </Routes>
  );
}

export default AppRoutes;