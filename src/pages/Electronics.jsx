import React from 'react';
import './Page.css';

const Electronics = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">電子學 (Electronics)</h1>

            <div className="theory-section">
                <h2>半導體物理基礎</h2>
                <p>感測器的核心往往是半導體元件。理解能帶理論對於掌握感測器原理至關重要。</p>
                <div className="formula-box">
                    <p><strong>本徵載子濃度 (Intrinsic Carrier Concentration):</strong></p>
                    <p className="math">ni = √(Nc Nv) e^(-Eg / 2kT)</p>
                </div>
            </div>

            <div className="theory-section">
                <h2>運算放大器 (Op-Amp)</h2>
                <p>感測器輸出的訊號通常很微弱，需要透過運算放大器進行放大與濾波。</p>
                <div className="formula-box">
                    <p><strong>理想運算放大器特性:</strong></p>
                    <ul>
                        <li>無限大開迴路增益 (Aol → ∞)</li>
                        <li>無限大輸入阻抗 (Rin → ∞)</li>
                        <li>零輸出阻抗 (Rout → 0)</li>
                    </ul>
                </div>
                <div className="formula-box">
                    <p><strong>非反相放大器增益:</strong></p>
                    <p className="math">Vout = Vin (1 + Rf / R1)</p>
                </div>
            </div>

            <div className="theory-section">
                <h2>類比數位轉換 (ADC)</h2>
                <p>將感測器的類比訊號轉換為微控制器可處理的數位訊號。</p>
                <div className="formula-box">
                    <p><strong>解析度 (Resolution):</strong></p>
                    <p className="math">Q = Vref / 2^N</p>
                    <p><small>其中 N 為位元數，Vref 為參考電壓。</small></p>
                </div>
            </div>
        </div>
    );
};

export default Electronics;
