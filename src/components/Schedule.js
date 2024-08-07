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
  const [textInput, setTextInput] = useState(""); // 텍스트 입력 상태

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 텍스트 입력 필드의 값이 변경될 때 호출되는 함수
  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
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
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy/MM/dd"
                className="date-picker"
              />
              {/*<p>날짜를 선택하세요:</p> <br /> */}
              <textarea
                value={textInput}
                onChange={handleTextInputChange}
                className="text-input"
                placeholder="오늘 무슨 일이 있으셨나요?"
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
