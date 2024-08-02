import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import googleLogo from './assets/google-icon.png';
import appleLogo from './assets/apple-icon.png';
import kakaoLogo from './assets/naver-icon.png';
import ForgotPassword from './ForgotPassword';
import Footer from './Footer'; // Footer 컴포넌트 임포트
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

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
        <a href="#" className="header-icon" rel="noopener noreferrer">
          <i className="fa-regular fa-circle-exclamation"></i>
        </a>
        <a href="#" className="header-icon2" rel="noopener noreferrer">
          <i className="fa-regular fa-bell"></i>
        </a>
        <div className="login-box">
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
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
      <Footer /> {/* Footer 컴포넌트 추가 */}
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
          <div className="login-container">
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="전화번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="아이디"
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
              type="password"
              placeholder="비밀번호 재입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>확인</button>
            <button onClick={handleSignup}>취소</button>
          </div>
        </div>
      </header>
    </div>
  );
}

function Dashboard() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // useNavigate는 Dashboard 컴포넌트 내에서 사용

  const handleConnect = () => {
    // 연인 연결 로직 추가
    console.log('Connecting with', email);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/*<h2>연인 연결</h2> */}
        <a href="#" className="header-icon" rel="noopener noreferrer">
          <i className="fa-regular fa-circle-exclamation"></i>
        </a>
        <a href="#" className="header-icon2" rel="noopener noreferrer">
          <i className="fa-regular fa-bell"></i>
        </a>
        <div className='container-box'>
        <div className="login-container">
        <h2>연인과 연결하여 <br /> 일기를 적어보세요</h2>
          <input
            type="email"
            placeholder="내 이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="icon-container">
            <FontAwesomeIcon icon={faLockOpen} className="icon" />
          </div>
          <h1>연결하고 싶은 연인의 이메일을 적어주세요</h1>
          <input
            type="email"
            placeholder="연인 이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleConnect}>연결하기</button>
          <button onClick={() => navigate('/')}>로그인 페이지로 돌아가기</button>
        </div>
        </div>
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
