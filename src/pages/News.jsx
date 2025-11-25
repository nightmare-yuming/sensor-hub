import React from 'react';
import './Page.css';
import newsData from '../data/news.json';

const News = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">產業新聞</h1>
            <div className="news-grid">
                {newsData.map((item) => (
                    <div className="news-card" key={item.id}>
                        <div className="news-tag">{item.tag}</div>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
