import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import CoupleCheck from "./CoupleCheck"; // CoupleCheck 컴포넌트 임포트
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import MainLayout from './components/MainLayout';


function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/couple-check" element={<CoupleCheck />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/main" element={<MainLayout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default MainApp;
