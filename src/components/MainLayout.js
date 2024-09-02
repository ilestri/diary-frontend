import React from 'react';
import Navbar from './Navbar';
import Modal from './Modal';
import Notification from './Notification';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Modal />
      <Notification />
    </div>
  );
};

export default MainLayout;
