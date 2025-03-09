import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação
import '../components/styles/organization.css';

function OrganizationPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('informacoes');
  const [selectedFunction, setSelectedFunction] = useState('data');

  // Estados para gerenciar as configurações do evento
  const [eventLocation, setEventLocation] = useState('Centro de Convenções, São Paulo');
  const [eventDate, setEventDate] = useState('2023-11-25');
  const [eventTime, setEventTime] = useState('18:00');

  // Função para salvar as alterações
  const handleSave = () => {
    alert('Configurações salvas com sucesso!');
    // Aqui você pode adicionar a lógica para salvar no banco de dados
  };

  // Renderiza o conteúdo com base na função selecionada
  const renderContent = () => {
    switch (selectedFunction) {
      case 'data':
        return (
          <div className="content">
            <h3>Data do Evento</h3>
            <div className="form-group">
              <label>Data:</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>
          </div>
        );
      case 'local':
        return (
          <div className="content">
            <h3>Local do Evento</h3>
            <div className="form-group">
              <label>Local:</label>
              <input
                type="text"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />
            </div>
          </div>
        );
      case 'hora':
        return (
          <div className="content">
            <h3>Hora do Evento</h3>
            <div className="form-group">
              <label>Hora:</label>
              <input
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
              />
            </div>
          </div>
        );
      default:
        return <div>Selecione uma função no menu.</div>;
    }
  };

  return (
    <div className="organization-page">
      <h2>Organização do Evento</h2>

      <div className="organization-container">
        {/* Menu Lateral */}
        <div className="sidebar-functions">
          <ul>
            {/* Categoria: Informações */}
            <li
              className={selectedCategory === 'informacoes' ? 'active-category' : ''}
              onClick={() => setSelectedCategory('informacoes')}
            >
              Informações
              {selectedCategory === 'informacoes' && (
                <ul className="submenu">
                  <li
                    className={selectedFunction === 'data' ? 'active' : ''}
                    onClick={() => setSelectedFunction('data')}
                  >
                    Data
                  </li>
                  <li
                    className={selectedFunction === 'local' ? 'active' : ''}
                    onClick={() => setSelectedFunction('local')}
                  >
                    Local
                  </li>
                  <li
                    className={selectedFunction === 'hora' ? 'active' : ''}
                    onClick={() => setSelectedFunction('hora')}
                  >
                    Hora
                  </li>
                </ul>
              )}
            </li>

            {/* Categoria: Configurações */}
            <li
              className={selectedCategory === 'configuracoes' ? 'active-category' : ''}
              onClick={() => setSelectedCategory('configuracoes')}
            >
              Configurações
              {selectedCategory === 'configuracoes' && (
                <ul className="submenu">
                  <li>Opção 1</li>
                  <li>Opção 2</li>
                  <li>Opção 3</li>
                </ul>
              )}
            </li>

            {/* Adicione mais categorias aqui */}
          </ul>
        </div>

        {/* Área de Conteúdo */}
        <div className="content-area">
          {renderContent()}
          <button onClick={handleSave}>Salvar Alterações</button>

          {/* Botão Voltar */}
          <div className="back-button">
            <button onClick={() => navigate('/dashboard')}>Voltar para o Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationPage;