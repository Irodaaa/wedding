import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Проверяем, что данные переданы правильно
  if (!state || !state.invitation) {
    return <div>Ошибка: данные приглашения не найдены</div>;
  }

  const { invitation } = state;

  return (
    <div className="confirmation-container">
      <h2>Подтверждение пригласительного</h2>
      <div className="invitation-details">
        <p><strong>Имя жениха:</strong> {invitation.groomName}</p>
        <p><strong>Имя невесты:</strong> {invitation.brideName}</p>
        <p><strong>Дата:</strong> {invitation.date}</p>
        <p><strong>Время:</strong> {invitation.time}</p>
        <p><strong>Место:</strong> {invitation.location}</p>
        <p><strong>Описание:</strong> {invitation.description}</p>
        {invitation.music && (
          <div>
            <p><strong>Музыка:</strong></p>
            <audio controls>
              <source src={invitation.music} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
      <button onClick={() => navigate('/')}>Вернуться на главную</button>
    </div>
  );
};

export default ConfirmationPage;
