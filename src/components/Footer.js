// Footer.js
import React from 'react';
import '../styles/Footer.css'; //푸터 css

//$nbsp; 는 빈칸 만드는 애
function Footer() {
   return (
      <div className="footer_copy">
         <h3>
            프젝에 아이콘 넣기 &nbsp;
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <i className="fa-brands fa-instagram"></i>
            </a>
            &nbsp;
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
               <i className="fa-brands fa-facebook"></i>
            </a>
            &nbsp;
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
               <i className="fa-brands fa-github"></i>
            </a>
            &nbsp;
            <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
               <i className="fa-brands fa-soundcloud"></i>
            </a>
            &nbsp;
         </h3>
         <p>© 2024 뭐시기 신기방기한 네</p>
      </div>
   );
}

export default Footer;
