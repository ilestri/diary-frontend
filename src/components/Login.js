import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-icon.png";
import appleLogo from "../assets/apple-icon.png";
import kakaoLogo from "../assets/naver-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faBell } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      const loginData = {
        email: email,
        password: password,
      };
  
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/sign_in`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });
  
        const data = await response.json().catch(() => {
          throw new Error("응답 형식이 JSON이 아닙니다.");
        });
  
        if (response.ok) {
          console.log("로그인 성공:", data);
          navigate("/dashboard"); // 로그인 성공 후 대시보드 페이지로 이동
        } else {
          console.error("로그인 실패:", data);
          // 에러 메시지 처리 (예: 알림 표시)
        }
      } catch (error) {
        console.error("로그인 중 오류 발생:", error);
      }
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
              <div className="separator"></div> {/* 선으로 나눔 */}
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
      </div>
    );
};

export default Login;
