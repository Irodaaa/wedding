import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './InvitationPage.css';

const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana'];
const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF'];

const InvitationPage = () => {
  const { id } = useParams();
  const invitations = JSON.parse(localStorage.getItem('invitations')) || [];
  
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const invitation = invitations.find(inv => inv.id && inv.id.toString() === id);

  // Проверяем, что приглашение найдено
  if (!invitation) {
    return <div>Пригласительное не найдено</div>;
  }

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="invitation-page">
      <h2 style={{ fontFamily: selectedFont, color: selectedColor }}>Пригласительное на свадьбу</h2>
      <div className="invitation-details" style={{ fontFamily: selectedFont, color: selectedColor }}>
        <p><strong>Имя жениха:</strong> {invitation.groomName}</p>
        <p><strong>Имя невесты:</strong> {invitation.brideName}</p>
        <p><strong>Дата:</strong> {invitation.date}</p>
        <p><strong>Время:</strong> {invitation.time}</p>
        <p><strong>Место:</strong> {invitation.location}</p>
        <p><strong>Описание:</strong> {invitation.description}</p>
        {invitation.music && (
          <div>
            <p><strong>Музыка:</strong></p>
            <audio controls autoPlay>
              <source src={invitation.music} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
      <div className="style-options">
        <div>
          <label htmlFor="font-select">Выберите шрифт:</label>
          <select id="font-select" value={selectedFont} onChange={handleFontChange}>
            {fonts.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="color-select">Выберите цвет:</label>
          <select id="color-select" value={selectedColor} onChange={handleColorChange}>
            {colors.map((color) => (
              <option key={color} value={color} style={{ backgroundColor: color }}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InvitationPage;
