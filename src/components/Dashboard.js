import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faCircleExclamation, faBell } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleConnect = () => {
    console.log("Connecting with", email);
    navigate("/couple-check");
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
            <h2>연인과 연결하여 <br /> 일기를 적어보세요</h2>
            <input type="email" placeholder="내 이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="icon-container">
              <FontAwesomeIcon icon={faLockOpen} className="icon" />
            </div>
            <h1>연결하고 싶은 연인의 이메일을 적어주세요</h1>
            <input type="email" placeholder="연인 이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleConnect}>연결하기</button>
            <button onClick={() => navigate("/")}>로그인 페이지로 돌아가기</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
