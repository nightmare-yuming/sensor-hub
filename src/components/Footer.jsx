import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>SENSOR<span className="logo-highlight">HUB</span></h3>
                    <p>探索感測器技術的未來。提供最新的應用、研究與產業新聞。</p>
                </div>
                <div className="footer-section">
                    <h4>快速連結</h4>
                    <ul>
                        <li><a href="/">首頁</a></li>
                        <li><a href="/applications">應用</a></li>
                        <li><a href="/research">研究</a></li>
                        <li><a href="/news">新聞</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>理論資源</h4>
                    <ul>
                        <li><a href="/theories">感測器理論</a></li>
                        <li><a href="/structures">結構與原理</a></li>
                        <li><a href="/electronics">電子學</a></li>
                        <li><a href="/circuits">電路學</a></li>
                        <li><a href="/electromagnetics">電磁學</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>聯絡我們</h4>
                    <p>Email: contact@sensorhub.com</p>
                    <div className="social-icons">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Sensor Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
