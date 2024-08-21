import React, { useState } from 'react';

const Modal = () => {
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);
  const [isUnlinkModalVisible, setUnlinkModalVisible] = useState(false);
  const [isConfirmUnlinkModalVisible, setConfirmUnlinkModalVisible] = useState(false);

  return (
    <div>
      <button className="btn_setting" onClick={() => setSettingsModalVisible(true)}>
        <i className="fa-solid fa-gears fa-2xl"></i>
      </button>

      {isSettingsModalVisible && (
        <div className="modal" id="settingsModal">
          <div className="modal_content">
            <span className="close" onClick={() => setSettingsModalVisible(false)}>&times;</span>
            <h2>환경설정</h2>
            <button onClick={() => { setSettingsModalVisible(false); setUnlinkModalVisible(true); }}>연인 해제</button>
          </div>
        </div>
      )}

      {isUnlinkModalVisible && (
        <div className="modal" id="unlinkModal">
          <div className="modal_content">
            <span className="close" onClick={() => setUnlinkModalVisible(false)}>&times;</span>
            <h2>연인 해제</h2>
            <button onClick={() => { setUnlinkModalVisible(false); setConfirmUnlinkModalVisible(true); }}>확인</button>
          </div>
        </div>
      )}

      {isConfirmUnlinkModalVisible && (
        <div className="modal" id="confirmUnlinkModal">
          <div className="modal_content">
            <span className="close" onClick={() => setConfirmUnlinkModalVisible(false)}>&times;</span>
            <h2>연인 해제 확인</h2>
            <button onClick={() => alert("연인이 해제되었습니다.")}>삭제</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
