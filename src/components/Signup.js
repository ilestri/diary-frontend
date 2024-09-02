import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const signupData = { username: name, nickname, phone_number: phone, email, password, birthdate };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user/sign_up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("회원가입 성공:", data);
        navigate("/");
      } else {
        console.error("회원가입 실패:", data);
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
            <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="전화번호" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="아이디" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="date" placeholder="생년월일" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            <div className="signup-buttons">
              <button onClick={handleSignup}>확인</button>
              <button onClick={() => navigate("/")}>취소</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Signup;
