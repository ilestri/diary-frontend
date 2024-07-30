import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    // 비밀번호 재설정 로직을 여기에 추가
    console.log('Password reset link sent');
    navigate('/'); // 비밀번호 재설정 후 로그인 페이지로 이동
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="forgot-password-box">
          <h2>비밀번호 재설정</h2>
          <div className="forgot-password-container">
            <input type="email" placeholder="이메일을 입력하세요" />
            <button onClick={handlePasswordReset}>비밀번호 재설정 링크 보내기</button>
            <button onClick={() => navigate('/')}>로그인 페이지로 돌아가기</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Dashboard;