import React from 'react';
import './Page.css';

const SensorStructures = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">結構與原理</h1>

            <div className="structure-grid">
                <div className="structure-card">
                    <h3>MEMS 加速度計結構</h3>
                    <div className="diagram-placeholder">
                        <svg viewBox="0 0 200 150" className="structure-svg">
                            <rect x="50" y="50" width="100" height="50" fill="none" stroke="#00f3ff" strokeWidth="2" />
                            <line x1="100" y1="50" x2="100" y2="20" stroke="#8b9bb4" strokeWidth="2" />
                            <circle cx="100" cy="75" r="10" fill="#00f3ff" opacity="0.5" />
                            <text x="100" y="120" fill="#fff" textAnchor="middle" fontSize="12">質量塊 (Proof Mass)</text>
                        </svg>
                    </div>
                    <p>利用微機電系統 (MEMS) 技術，透過梳狀電容結構感測質量塊的位移，進而推算加速度。</p>
                </div>

                <div className="structure-card">
                    <h3>LiDAR 運作原理</h3>
                    <div className="diagram-placeholder">
                        <svg viewBox="0 0 200 150" className="structure-svg">
                            <rect x="20" y="100" width="30" height="30" fill="#0a0f1c" stroke="#00f3ff" />
                            <path d="M50 115 L150 50" stroke="#00f3ff" strokeWidth="2" strokeDasharray="5,5" />
                            <circle cx="150" cy="50" r="5" fill="#fff" />
                            <path d="M150 50 L60 115" stroke="#ff0055" strokeWidth="2" strokeDasharray="5,5" />
                            <text x="100" y="140" fill="#fff" textAnchor="middle" fontSize="12">ToF = (t2 - t1) * c / 2</text>
                        </svg>
                    </div>
                    <p>發射雷射脈衝並接收反射訊號，計算飛行時間 (ToF) 以獲得精確距離資訊。</p>
                </div>

                <div className="structure-card">
                    <h3>CMOS 影像感測器</h3>
                    <div className="diagram-placeholder">
                        <svg viewBox="0 0 200 150" className="structure-svg">
                            <rect x="40" y="40" width="120" height="80" fill="none" stroke="#8b9bb4" />
                            <rect x="50" y="50" width="20" height="20" fill="#00f3ff" opacity="0.3" />
                            <rect x="75" y="50" width="20" height="20" fill="#00f3ff" opacity="0.3" />
                            <rect x="100" y="50" width="20" height="20" fill="#00f3ff" opacity="0.3" />
                            <text x="100" y="140" fill="#fff" textAnchor="middle" fontSize="12">Bayer Filter Array</text>
                        </svg>
                    </div>
                    <p>每個像素包含光電二極體與放大器，將光訊號直接轉換為電壓訊號輸出。</p>
                </div>

                <div className="structure-card">
                    <h3>熱電堆 (Thermopile) 結構</h3>
                    <div className="diagram-placeholder">
                        <svg viewBox="0 0 200 150" className="structure-svg">
                            <path d="M50 100 L100 50 L150 100" fill="none" stroke="#ff5500" strokeWidth="3" />
                            <text x="100" y="40" fill="#fff" textAnchor="middle" fontSize="12">熱接點 (Hot Junction)</text>
                            <text x="100" y="120" fill="#fff" textAnchor="middle" fontSize="12">冷接點 (Cold Junction)</text>
                        </svg>
                    </div>
                    <p>串聯多個熱電偶 (Thermocouple)，利用席貝克效應 (Seebeck Effect) 測量溫差產生的電壓。</p>
                </div>
            </div>
        </div>
    );
};

export default SensorStructures;
