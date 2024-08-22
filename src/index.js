import React from 'react';
import ReactDOM from 'react-dom/client'; // 변경된 부분
import AppRouter from './App';
import './styles/index.css';

// createRoot를 사용하여 새로운 루트 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <AppRouter />
   </React.StrictMode>
);
