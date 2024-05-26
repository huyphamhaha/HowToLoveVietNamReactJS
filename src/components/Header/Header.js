import React, { useState, useEffect } from 'react';
import './Header.css'; // Đảm bảo rằng bạn đã tạo file CSS này
import { Routes, Route, Link } from 'react-router-dom'





const Header = ({ backgroundColor }) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const navbarSpecialStyle = {
    backgroundColor: backgroundColor || 'defaultColor',
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scroll) {
    navbarClasses.push('scrolled');
  }

  return (
    <>
      <nav className={navbarClasses.join(" ")} style={navbarSpecialStyle}>
        <label htmlFor="menu-toggle" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </label>
        <input type="checkbox" id="menu-toggle" aria-label="hi"/>
        <ul className="links">
          <a href="#hero-section"><img src="./Img/logo.png" className="logo" alt=""/></a>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/provinceMainPage">Tỉnh thành</Link></li>
          <li><a href="">Môn học</a></li>
          <li><Link to="/contact">Liên hệ</Link></li>
          <li><Link to="/test">Luyện tập</Link></li>

          <li><a href="https://www.coze.com/store/bot/7356249655392534536?panel=1&bid=6c7k06i0k5g07">ChatBot AI</a></li>
        </ul>

        <a href="#hero-section"><img src="./Img/logo.png" className="logo logoSpecial" alt=""/></a>

      </nav>
    </>
  );
};

export default Header;
