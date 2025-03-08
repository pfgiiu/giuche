import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardHome from '../components/DashboardHome';
import '../components/styles/dashboard.css';

function DashboardPage() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <DashboardHome />
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;