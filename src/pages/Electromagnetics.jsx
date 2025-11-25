import React from 'react';
import './Page.css';

const Electromagnetics = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">電磁學 (Electromagnetics)</h1>

            <div className="theory-section">
                <h2>馬克斯威方程式 (Maxwell's Equations)</h2>
                <p>描述電場、磁場與電荷、電流之間關係的基礎方程式，是無線感測與遙測技術的基石。</p>
                <div className="formula-box">
                    <p><strong>高斯定律 (電場):</strong> <span className="math">∇ · E = ρ / ε₀</span></p>
                    <p><strong>高斯定律 (磁場):</strong> <span className="math">∇ · B = 0</span></p>
                    <p><strong>法拉第感應定律:</strong> <span className="math">∇ × E = -∂B / ∂t</span></p>
                    <p><strong>安培-馬克斯威定律:</strong> <span className="math">∇ × B = μ₀ (J + ε₀ ∂E / ∂t)</span></p>
                </div>
            </div>

            <div className="theory-section">
                <h2>電磁波傳播</h2>
                <p>雷達 (Radar) 與無線通訊 (RF) 的物理基礎。</p>
                <div className="formula-box">
                    <p><strong>光速與頻率關係:</strong></p>
                    <p className="math">c = λ × f</p>
                </div>
                <div className="formula-box">
                    <p><strong>Friis 傳輸方程式 (接收功率):</strong></p>
                    <p className="math">Pr = Pt Gt Gr (λ / 4πR)²</p>
                    <p><small>說明接收功率隨距離 R 的平方衰減。</small></p>
                </div>
            </div>
        </div>
    );
};

export default Electromagnetics;
