import React from 'react';
import './Page.css';

const Applications = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">感測器應用</h1>
            <div className="content-grid">
                <div className="content-card">
                    <img src="https://placehold.co/600x400/0a0f1c/00f3ff?text=Smart+City" alt="Smart City" />
                    <div className="card-body">
                        <h3>智慧城市</h3>
                        <p>利用環境光感與空氣品質感測器，優化城市照明與監測污染。</p>
                    </div>
                </div>
                <div className="content-card">
                    <img src="https://placehold.co/600x400/0a0f1c/00f3ff?text=Autonomous" alt="Autonomous Driving" />
                    <div className="card-body">
                        <h3>自動駕駛</h3>
                        <p>整合 LiDAR、雷達與影像感測器，實現精確定位與障礙物偵測。</p>
                    </div>
                </div>
                <div className="content-card">
                    <img src="https://placehold.co/600x400/0a0f1c/00f3ff?text=Healthcare" alt="Healthcare" />
                    <div className="card-body">
                        <h3>智慧醫療</h3>
                        <p>穿戴式生物感測器即時監測心率、血氧與體溫。</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applications;
