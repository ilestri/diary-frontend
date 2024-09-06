import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faCircleExclamation, faBell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../styles/App.css";

const Dashboard = () => {
  const [phone, setPhone] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const handleConnect = async () => {

    const token = localStorage.getItem("accessToken");
    console.log("토큰:", token); // 토큰 로그 출력

    

    if (!token) {
      console.error("토큰이 없습니다. 로그인 해주세요.");
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/relation/get-nickname?phone_number=${phone}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      setUserInfo(response.data);
      console.log("사용자 정보:", response.data);
      // 연결 후 페이지 이동
      navigate("/couple-check");
    } catch (error) {
      console.error("연결 중 오류 발생:", error);
    }
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
            <input 
              type="tel" 
              placeholder="ex) 010-xxxx-xxxx" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
            <div className="icon-container">
              <FontAwesomeIcon icon={faLockOpen} className="icon" />
            </div>
            <button onClick={handleConnect}>연결하기</button>
            <button onClick={() => navigate("/")}>로그인 페이지로 돌아가기</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
