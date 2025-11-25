import React from 'react';
import './Page.css';

const Circuits = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">電路學 (Circuits)</h1>

            <div className="theory-section">
                <h2>基本電路定律</h2>
                <p>分析感測器介面電路的基礎。</p>
                <div className="formula-box">
                    <p><strong>歐姆定律 (Ohm's Law):</strong></p>
                    <p className="math">V = I × R</p>
                </div>
                <div className="formula-box">
                    <p><strong>基爾霍夫電壓定律 (KVL):</strong></p>
                    <p className="math">∑ V = 0</p>
                </div>
            </div>

            <div className="theory-section">
                <h2>惠斯登電橋 (Wheatstone Bridge)</h2>
                <p>用於精確測量電阻變化，常用於應變規 (Strain Gauge) 與熱敏電阻 (Thermistor) 電路。</p>
                <div className="formula-box">
                    <p><strong>輸出電壓:</strong></p>
                    <p className="math">Vout = Vin (Rx / (R3 + Rx) - R2 / (R1 + R2))</p>
                    <p><small>當電橋平衡時，Vout = 0，此時 R1/R2 = R3/Rx。</small></p>
                </div>
            </div>

            <div className="theory-section">
                <h2>濾波器 (Filters)</h2>
                <p>去除感測器訊號中的雜訊。</p>
                <div className="formula-box">
                    <p><strong>RC 低通濾波器截止頻率:</strong></p>
                    <p className="math">fc = 1 / (2πRC)</p>
                </div>
            </div>
        </div>
    );
};

export default Circuits;
