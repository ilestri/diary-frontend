// CoupleCheck.js
import React from "react";

function CoupleCheck() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <h2>연인 연결 확인</h2>
          <div className="container">
            <p>연결하기가 성공적으로 완료되었습니다!</p>
            <button onClick={() => window.close()}>창 닫기</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default CoupleCheck;
