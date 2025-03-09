import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/sidebar.css';
import {
  Home,
  People,
  LocalAtm,
  Assignment,
  Notifications,
  Settings, // Ícone para Organização
} from '@mui/icons-material';

function Sidebar() {
  const location = useLocation(); // Para identificar a rota atual

  // Itens do menu
  const menuItems = [
    { path: '/dashboard', icon: <Home />, label: 'Início' },
    { path: '/dashboard/suppliers', icon: <People />, label: 'Fornecedores' },
    { path: '/dashboard/budget', icon: <LocalAtm />, label: 'Orçamento' },
    { path: '/dashboard/tasks', icon: <Assignment />, label: 'Tarefas' },
    {
      path: '/dashboard/notifications',
      icon: <Notifications />,
      label: 'Notificações',
    },
    {
      path: '/dashboard/organization',
      icon: <Settings />,
      label: 'Organização',
    },
  ];

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <Link to={item.path}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;