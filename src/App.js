import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateInvitation from './components/CreateInvitation';
import InvitationDetails from './components/InvitationDetails';
import InvitationView from './components/InvitationView';
import ConfirmationPage from './components/ConfirmationPage';
import InvitationPage from './components/InvitationPage';
import SignUp from './components/SignUp';
import EditInvitation from './components/EditInvitation';
import EditInvitationForm from './components/EditInvitationForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateInvitation />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/invitation/:id" element={<InvitationPage />} />
          <Route path="/edit/:id" element={<EditInvitation />} /> {/* Добавьте маршрут */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/invitation-view" element={<InvitationView />} />
          <Route path="/invitation/:id" element={<InvitationDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
