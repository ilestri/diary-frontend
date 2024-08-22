import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import googleLogo from "./assets/google-icon.png";
import appleLogo from "./assets/apple-icon.png";
import kakaoLogo from "./assets/naver-icon.png";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";
import "./styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faCircleExclamation,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import CoupleCheck from "./CoupleCheck"; // CoupleCheck 컴포넌트 임포트
import Schedule from "./components/Schedule";

// 로그인 페이지 컴포넌트
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직을 여기에 추가
    console.log("Logging in with", email, password);
    navigate("/dashboard"); // 로그인 성공 후 대시보드 페이지로 이동
  };

  const handleGoogleLogin = () => {
    // 구글 로그인 로직 추가
    console.log("Google login");
    navigate("/Schedule");
  };

  const handleAppleLogin = () => {
    // 애플 로그인 로직 추가
    console.log("Apple login");
  };

  const handleKakaoLogin = () => {
    // 카카오톡 로그인 로직 추가
    console.log("Kakao login");
  };

  const handleNewLogin = () => {
    // 회원가입 페이지로 이동
    navigate("/signup");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-icon">
          <FontAwesomeIcon icon={faCircleExclamation} />
        </div>
        <div className="header-icon2">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="box">
          <div className="container">
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
            <div className="separator"></div> {/*선으로 나눔 */}
            <a href="/forgot-password" className="forgot-link">
              비밀번호를 까먹으셨나요?
            </a>
            <br />
            <div className="login-buttons">
              <button onClick={handleGoogleLogin}>
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="social-logo"
                />
              </button>
              <button onClick={handleAppleLogin}>
                <img src={appleLogo} alt="Apple logo" className="social-logo" />
              </button>
              <button onClick={handleKakaoLogin}>
                <img src={kakaoLogo} alt="Kakao logo" className="social-logo" />
              </button>
            </div>
            <div className="social-login">
              <button onClick={handleNewLogin}>회원가입</button>
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
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState(""); // 생일 추가
  const navigate = useNavigate();

  const handleSignup = async () => {
    const signupData = {
      username: name,
      nickname: nickname,
      phone_number: phone,
      email: email,
      password: password,
      birthdate: birthdate,
    };
  
    try {
      const response = await fetch("http://localhost:8080/user/sign_up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });
  
      // 응답이 JSON 형식인지 확인
      const data = await response.json().catch(() => {
        throw new Error("응답 형식이 JSON이 아닙니다.");
      });
  
      if (response.ok) {
        console.log("회원가입 성공:", data);
        navigate("/");
      } else {
        console.error("회원가입 실패:", data);
        // 에러 메시지 처리 (예: 알림 표시)
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <h2>회원가입</h2>
          <div className="container">
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
              type="date"
              placeholder="생년월일"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            <div className="signup-buttons">
              <button onClick={handleSignup}>확인</button>
              <button onClick={() => navigate("/")}>취소</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

function Dashboard() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // useNavigate는 Dashboard 컴포넌트 내에서 사용

  const handleConnect = () => {
    // 연인 연결 로직 추가
    console.log("Connecting with", email);
    navigate("/couple-check"); // CoupleCheck 페이지로 이동
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-icon">
          <FontAwesomeIcon icon={faCircleExclamation} />
        </div>
        <div className="header-icon2">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="box container-box">
          <div className="container">
            <h2>
              연인과 연결하여 <br /> 일기를 적어보세요
            </h2>
            <input
              type="email"
              placeholder="내 이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div className="icon-container">
              <FontAwesomeIcon icon={faLockOpen} className="icon" />
            </div>
            <br />
            <h1>연결하고 싶은 연인의 이메일을 적어주세요</h1>
            <input
              type="email"
              placeholder="연인 이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleConnect}>연결하기</button>
            <button onClick={() => navigate("/")}>
              로그인 페이지로 돌아가기
            </button>
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
        <Route path="/couple-check" element={<CoupleCheck />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="Schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
