import React from 'react';
import './Page.css';

const Theories = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">感測器理論</h1>

            <div className="theory-section">
                <h2>1. 定位技術 (Positioning)</h2>
                <p>定位感測器主要依賴於時間測量 (ToF, Time of Flight) 與訊號強度 (RSSI)。</p>
                <ul>
                    <li><strong>GNSS (全球導航衛星系統):</strong> 利用三邊測量法，接收至少四顆衛星的訊號來解算位置 (x, y, z) 與時間 (t)。</li>
                    <li><strong>IMU (慣性測量單元):</strong> 結合加速度計與陀螺儀，透過積分計算位移與角度變化，適用於室內或 GPS 訊號微弱處。</li>
                </ul>
            </div>

            <div className="theory-section">
                <h2>2. 遙測技術 (Remote Sensing)</h2>
                <p>遙測是指在不接觸物體的情況下，探測其物理特性的技術。</p>
                <ul>
                    <li><strong>主動式遙測:</strong> 發射能量並接收反射訊號 (如雷達 Radar, 光達 LiDAR)。</li>
                    <li><strong>被動式遙測:</strong> 接收物體自身輻射或反射的自然光 (如多光譜攝影機)。</li>
                </ul>
            </div>

            <div className="theory-section">
                <h2>3. 環境光感 (Ambient Light)</h2>
                <p>利用光電效應將光能轉換為電能。</p>
                <ul>
                    <li><strong>光電二極體 (Photodiode):</strong> 當光子撞擊半導體介面時產生電子-電洞對，進而產生電流。</li>
                    <li><strong>光譜響應:</strong> 模擬人眼對不同波長光線的敏感度曲線 (CIE 1931)。</li>
                </ul>
            </div>

            <div className="theory-section">
                <h2>4. 紅外線 (Infrared)</h2>
                <p>紅外線感測器分為熱型與光子型。</p>
                <ul>
                    <li><strong>PIR (被動式紅外線):</strong> 感測人體發出的紅外線變化，常用於防盜與自動照明。</li>
                    <li><strong>IR 通訊:</strong> 利用特定頻率 (如 38kHz) 的紅外線脈衝進行數據傳輸。</li>
                </ul>
            </div>

            <div className="theory-section">
                <h2>5. 溫度熱像 (Thermal Imaging)</h2>
                <p>基於普朗克黑體輻射定律，所有高於絕對零度的物體都會輻射紅外線。</p>
                <ul>
                    <li><strong>微測輻射熱計 (Microbolometer):</strong> 非製冷型熱感測器，吸收紅外線輻射導致溫度升高，改變電阻值。</li>
                    <li><strong>熱成像:</strong> 將紅外線輻射強度分佈轉換為可視化的偽彩色圖像。</li>
                </ul>
            </div>
        </div>
    );
};

export default Theories;
