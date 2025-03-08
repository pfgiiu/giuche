import React, { useState } from 'react';
import './styles/dashboard.css';

function DashboardHome() {
  // Mock de dados do usuário
  const user = { name: 'Giulia' };

  // Mock de afazeres
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Revisar contrato com fornecedores', completed: false },
    { id: 2, text: 'Confirmar lista de convidados VIP', completed: false },
    { id: 3, text: 'Testar sistema de som e iluminação', completed: false },
  ]);

  // Mock de notificações
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Novo fornecedor cadastrado', read: false },
    { id: 2, text: 'Reunião de planejamento às 15h', read: false },
    { id: 3, text: 'Pagamento aprovado para o catering', read: false },
  ]);

  // Função para marcar tarefa como concluída
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Função para marcar notificação como lida
  const markNotificationAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="dashboard-home">
      <h2>Bem-vindo, {user.name}!</h2>

      {/* Informações do Evento */}
      <div className="event-info">
        <div className="info-card">
          <h3>Data do Evento</h3>
          <p>25 de Novembro de 2023</p>
        </div>
        <div className="info-card">
          <h3>Local</h3>
          <p>Centro de Convenções, São Paulo</p>
        </div>
        <div className="info-card">
          <h3>Status</h3>
          <p>Planejamento em Andamento</p>
        </div>
      </div>

      {/* Agenda de Afazeres */}
      <div className="todo-list">
        <h3>Minha Agenda</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span>{task.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Painel de Notificações */}
      <div className="notifications-panel">
        <h3>Notificações</h3>
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={notification.read ? 'read' : ''}
              onClick={() => markNotificationAsRead(notification.id)}
            >
              <span>{notification.text}</span>
              {!notification.read && <div className="unread-dot"></div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardHome;