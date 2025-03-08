import React from 'react';
import { Link } from 'react-router-dom';
import './styles/sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/dashboard">Início</Link></li>
        <li><Link to="/dashboard/suppliers">Gestão de Fornecedores</Link></li>
        <li><Link to="/dashboard/team">Gestão de Equipe</Link></li>
        <li><Link to="/dashboard/budget">Orçamento e Finanças</Link></li>
        <li><Link to="/dashboard/tickets">Venda de Ingressos</Link></li>
        <li><Link to="/dashboard/credentials">Credenciais e Acessos</Link></li>
        <li><Link to="/dashboard/marketing">Marketing e Redes Sociais</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;