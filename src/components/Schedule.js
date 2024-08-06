import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scheduleImage from "../assets/schedule.png";
import "../styles/Schedule.css";
import {
  faBell,
  faBars,
  faCalendarDays,
  faPenToSquare,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker"; // 달력 넣는
import "react-datepicker/dist/react-datepicker.css";

function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // 날짜 선택 상태

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="header-icon2">
          <FontAwesomeIcon icon={faCalendarDays} />
        </div>
        <div className="header-icon22">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="header-icon3" onClick={handleOpenModal}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div className="header-icon4">
          <FontAwesomeIcon icon={faGear} />
        </div>
        <img src={scheduleImage} className="background-logo" alt="Schedule" />
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <p>날짜를 선택하세요:</p>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy/MM/dd"
                className="date-picker"
              />
              <div className="modal-buttons">
                <button className="close-button" onClick={handleCloseModal}>
                  확인
                </button>
                <button className="close-button" onClick={handleCloseModal}>
                  취소
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Schedule;
