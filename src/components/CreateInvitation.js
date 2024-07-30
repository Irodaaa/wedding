import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CreateInvitation.css';
import background from '../images/WhiteAndBeigeMinimalisticCalendarWeddingInvitation.png'; // Проверьте путь к изображению

function CreateInvitation() {
  const [groomName, setGroomName] = useState('жених');
  const [brideName, setBrideName] = useState('невеста');
  const [weddingDate, setWeddingDate] = useState(new Date());
  const [location, setLocation] = useState('Heave\'s Garden, Tashkent');
  const [description, setDescription] = useState('Дополнительная информация: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.');
  const [backgroundImage, setBackgroundImage] = useState(background);

  const handleDateChange = (event) => {
    setWeddingDate(new Date(event.target.value));
  };

  const handleBackgroundImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="create-invitation-container">
      <div className="invitation-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="wedding-title">THE WEDDING</div>
        <div className="names">{`${groomName} & ${brideName}`}</div>
        <div className="ceremony-title">WEDDING CEREMONY</div>
        <div className="wedding-details">
          {`${groomName} & ${brideName}`}<br />
          {weddingDate.toLocaleDateString()}<br />
          {weddingDate.toLocaleTimeString()}<br />
          {location}<br />
          <Calendar className="wedding-calendar" value={weddingDate} onChange={() => { }} />
        </div>
        <div className="wedding-details">{description}</div>
      </div>
      <form className="create-invitation-form">
        <div className="form-group">
          <label>Имя жениха:</label>
          <input type="text" value={groomName} onChange={(e) => setGroomName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Имя невесты:</label>
          <input type="text" value={brideName} onChange={(e) => setBrideName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Дата:</label>
          <input type="date" onChange={handleDateChange} />
        </div>
        <div className="form-group">
          <label>Время:</label>
          <input type="time" onChange={(e) => setWeddingDate(new Date(weddingDate.toDateString() + ' ' + e.target.value))} />
        </div>
        <div className="form-group">
          <label>Место:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Описание:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Фоновое изображение:</label>
          <input type="file" onChange={handleBackgroundImageChange} />
        </div>
        <button type="button">Сохранить</button>
      </form>
    </div>
  );
}

export default CreateInvitation;
