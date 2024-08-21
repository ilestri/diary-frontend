import React, { useState } from 'react';

const Navbar = () => {
  const [isNavMenuVisible, setNavMenuVisible] = useState(false);
  const toggleNavMenu = () => setNavMenuVisible(!isNavMenuVisible);

  return (
    <nav>
      <div className="nav_container">
        <a href="#" className="btn_nav" onClick={toggleNavMenu}>
          <i className="fa-solid fa-bars fa-2xl"></i>
        </a>
        <ul className={`nav_menu ${isNavMenuVisible ? 'visible' : ''}`}>
          <li className="nav_item">
            개인정보
            <ul className="sub_menu">
              <li><a href="#" className="nav_sub_item">개인정보 확인</a></li>
              <li><a href="#" className="nav_sub_item">개인정보 수정</a></li>
            </ul>
          </li>
          <li className="nav_item">
            일기정보
            <ul className="sub_menu">
              <li><a href="#" className="nav_sub_item">일기 추가</a></li>
              <li><a href="#" className="nav_sub_item">일기 수정</a></li>
              <li><a href="#" className="nav_sub_item">일기 삭제</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
