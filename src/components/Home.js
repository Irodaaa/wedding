import React, { useState } from 'react';
import './Home.css';
import Modal from './Modal';
import InvitationTemplate from './InvitationTemplate';
import template1 from '../images/template1.png'
import template2 from '../images/template2.png';
import ConfirmModal from './ConfirmModal';
import music1 from '../music/wedding.mp3'
import birth1 from '../images/birth1.png'
import birth2 from '../images/birth2.png'

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentInvitation, setCurrentInvitation] = useState({});
  
    const handleOpenModal = (invitationDetails) => {
      setCurrentInvitation(invitationDetails);
      setShowModal(true);
    };
  
    const handleCloseModal = () => setShowModal(false);
  
    const invitations = [
      {
        image: template1,
        title: 'Taklifnoma',
        newPrice: '50.000 sum',
        oldPrice: '100.000 sum',
        sampleLink: '#',
        createLink: '/create',
        details: {
            image: template1,
            date: '10.12.2025',
            time: '18:00',
            location: "Heaven's Garden Restoran",
            description: 'Свадебные детали для Азиза и Азизы',
            music: music1,
          },
      },
      {
        image: template2,
        title: 'Taklifnoma',
        newPrice: '50.000 sum',
        oldPrice: '100.000 sum',
        sampleLink: '#',
        createLink: '/create',
        details: {
            image: template2,
            date: '24.10.2026',
            time: '18:00',
            location: 'Yashasaray Restorani',
            description: 'Свадебные детали для Акрам и Фарангиз',
            music: music1,
          },
      },
    ];

    const birthdayInvitations = [
        {
          image: birth1,
          title: 'Birthday Bash',
          newPrice: '30.000 sum',
          oldPrice: '60.000 sum',
          sampleLink: '#',
          createLink: '/create',
          details: {
            date: '05.09.2024',
            time: '15:00',
            location: "Birthday Hall",
            description: 'Детали вечеринки на день рождения',
            music: '/path/to/birthday-music1.mp3',
          },
        },
        {
          image: birth2,
          title: 'Party Time',
          newPrice: '30.000 sum',
          oldPrice: '60.000 sum',
          sampleLink: '#',
          createLink: '/create',
          details: {
            date: '15.08.2024',
            time: '16:00',
            location: 'Fun Zone',
            description: 'Детали вечеринки на день рождения',
            music: '/path/to/birthday-music2.mp3',
          },
        },
      ];

  return (
    <div className="home-container">
      <div className="hero-container">
        <div className="hero-section">
          <div className="feature">
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#A48768" d="M18.4 12.5L9 18.38L8 19V6zm-1.9 0L9 7.8v9.4z"/></svg>            
            </div>
            <div className="feature-text">
              <h3>Onsectetur adipiscin</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#A48768"><circle cx="12" cy="12" r="8.5"/><path stroke-linecap="round" d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"/></g></svg>            </div>
            <div className="feature-text">
              <h3>Duis aute</h3>
              <p>Excepteur sint occaecat cupidatat non proident, sun</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#A48768" d="M4.24 12.25a4.19 4.19 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.241 4.241 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.218 5.218 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z"/></svg>            </div>
            <div className="feature-text">
              <h3>Rest laborum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur cupidatat non pr</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <h2>Toyga taklifnomalar</h2>
        <p>Bibendum enim facilisis gravida neque</p>
        <div className="invitation-list">
        {invitations.map((invitation, index) => (
          <InvitationTemplate
            key={index}
            image={invitation.image}
            title={invitation.title}
            newPrice={invitation.newPrice}
            oldPrice={invitation.oldPrice}
            sampleLink={invitation.sampleLink}
            createLink={invitation.createLink}
            onSampleClick={handleOpenModal}
            invitationDetails={invitation.details}
          />
        ))}
      </div>

      <div className="content-section">
        <h2>Tug'ilgan kunga taklifnomalar</h2>
        <p>Bizning takliflarimiz bilan xursand bo'ling va nishonlang</p>
        <div className="invitation-list">
          {birthdayInvitations.map((invitation, index) => (
            <InvitationTemplate
              key={index}
              image={invitation.image}
              title={invitation.title}
              newPrice={invitation.newPrice}
              oldPrice={invitation.oldPrice}
              sampleLink={invitation.sampleLink}
              createLink={invitation.createLink}
              onSampleClick={handleOpenModal}
              invitationDetails={invitation.details}
            />
          ))}
        </div>
      </div>

      <Modal showModal={showModal} handleClose={handleCloseModal} musicSrc={currentInvitation.music}>
        <div className="wedding-info">
          <img
            src={currentInvitation.image}
            alt="Wedding"
            className="wedding-image"
          />
          <h2>Детали свадьбы</h2>
          <p>Дата: {currentInvitation.date}</p>
          <p>Время: {currentInvitation.time}</p>
          <p>Место: {currentInvitation.location}</p>
          <p>{currentInvitation.description}</p>
          <audio controls className="audio-player">
            <source src={currentInvitation.music} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </Modal>
      </div>
    </div>
  );
};

export default Home;


