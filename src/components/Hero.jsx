import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-bg-animation"></div>
            <div className="hero-content">
                <h1>探索感測科技的<br /><span className="hero-highlight">無限可能</span></h1>
                <p>
                    從定位導航到環境監測，深入了解驅動現代世界的感測器技術。
                    <br />
                    匯集最新研究、應用案例與產業新聞。
                </p>
                <div className="hero-btns">
                    <a href="/applications" className="btn btn-primary">探索應用</a>
                    <a href="/theories" className="btn btn-secondary">學習理論</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
