import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <section className="section-container">
                <h2 className="section-title">重點領域</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-map-marker-alt"></i></div>
                        <h3>定位技術</h3>
                        <p>GPS, GNSS, IPS 等精確定位解決方案。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-satellite-dish"></i></div>
                        <h3>遙測感測</h3>
                        <p>衛星影像、雷達與光達技術應用。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-sun"></i></div>
                        <h3>環境光感</h3>
                        <p>ALS, 光譜分析與智慧照明控制。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-wifi"></i></div>
                        <h3>紅外線</h3>
                        <p>IR 通訊、夜視與熱成像技術。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-fire"></i></div>
                        <h3>溫度熱像</h3>
                        <p>非接觸式測溫與工業熱分析。</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
