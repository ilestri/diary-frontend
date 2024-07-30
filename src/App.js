import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import googleLogo from './assets/google-icon.png';
import appleLogo from './assets/apple-icon.png';
import kakaoLogo from './assets/naver-icon.png';
import ForgotPassword from './ForgotPassword';
import './App.css';

// 로그인 페이지 컴포넌트
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직을 여기에 추가
    console.log('Logging in with', email, password);
    navigate('/dashboard'); // 로그인 성공 후 대시보드 페이지로 이동
  };

  const handleGoogleLogin = () => {
    // 구글 로그인 로직 추가
    console.log('Google login');
  };

  const handleAppleLogin = () => {
    // 애플 로그인 로직 추가
    console.log('Apple login');
  };

  const handleKakaoLogin = () => {
    // 카카오톡 로그인 로직 추가
    console.log('Kakao login');
  };

  const handleNewLogin = () => {
    // 회원가입 페이지로 이동
    navigate('/signup');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-box">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="login-container">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>로그인</button>
            <a href="/forgot-password" className="forgot-link">비밀번호를 까먹으셨나요?</a>
            <div className="social-login">
              <button onClick={handleGoogleLogin}>
                <img src={googleLogo} alt="Google logo" className="social-logo" />
              </button>
              <button onClick={handleAppleLogin}>
                <img src={appleLogo} alt="Apple logo" className="social-logo" />
              </button>
              <button onClick={handleKakaoLogin}>
                <img src={kakaoLogo} alt="Kakao logo" className="social-logo" />
              </button>
              <button onClick={handleNewLogin}>
                회원가입
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

// 회원가입 페이지 컴포넌트
function Signup() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // 회원가입 로직을 여기에 추가
    console.log('Signing up with', { name, nickname, email, password, phone });
    navigate('/'); // 회원가입 성공 후 로그인 페이지로 이동
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="signup-box">
          <h2>회원가입</h2>
          <div className="signup-container">
            <input 
              type="text" 
              placeholder="이름" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="별명" 
              value={nickname} 
              onChange={(e) => setNickname(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="이메일" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="비밀번호" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="전화번호" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
            <button onClick={handleSignup}>회원가입</button>
            <button onClick={() => navigate('/')}>로그인 페이지로 돌아가기</button>
          </div>
        </div>
      </header>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Dashboard</h2>
      </header>
    </div>
  );
}

// MainApp 컴포넌트를 export
function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
