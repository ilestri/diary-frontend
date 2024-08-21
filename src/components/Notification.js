import React, { useState } from 'react';

const Notification = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  return (
    <div>
      <button className="btn_notice" onClick={() => setNotificationVisible(!isNotificationVisible)}>
        <i className="fa-regular fa-bell fa-2xl"></i>
      </button>

      {isNotificationVisible && (
        <div className="notification-panel" id="notificationPanel">
          <div className="notification-header">
            <h3>알림</h3>
            <button className="close_btn" onClick={() => setNotificationVisible(false)}>×</button>
          </div>
          <ul className="notice_menu" id="noticeMenu">
            <li className="notice_list">알림 내용 1 <button className="list_close">×</button></li>
            <li className="notice_list">알림 내용 2 <button className="list_close">×</button></li>
            <li className="notice_list">알림 내용 3 <button className="list_close">×</button></li>
            <button className="btn_all_clear">모두 지우기</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;
