import React from 'react';
import { useLocation } from 'react-router-dom';
import './InvitationView.css';

const InvitationView = () => {
  const location = useLocation();
  const { invitationDetails } = location.state || {};

  if (!invitationDetails) {
    return <div>Пригласительное не найдено</div>;
  }

  return (
    <div className="invitation-view">
      <div className="invitation-card">
        <div className="header">
          <h1>{invitationDetails.brideName} & {invitationDetails.groomName}</h1>
        </div>
        <div className="content">
          <div className="date-time">
            <p><span>Дата:</span> {invitationDetails.date}</p>
            <p><span>Время:</span> {invitationDetails.time}</p>
          </div>
          <div className="location">
            <p><span>Место:</span> {invitationDetails.location}</p>
          </div>
          <div className="description">
            <p>{invitationDetails.description}</p>
          </div>
        </div>
        {invitationDetails.music && (
          <div className="audio-container">
            <audio controls className="audio-player">
              <source src={invitationDetails.music} type="audio/mpeg" />
              Ваш браузер не поддерживает аудио элемент.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvitationView;
