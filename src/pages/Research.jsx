import React from 'react';
import './Page.css';
import researchData from '../data/research.json';

const Research = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">最新研究</h1>
      <div className="research-list">
        {researchData.map((item) => (
          <div className="research-item" key={item.id}>
            <span className="date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <a href="#" className="read-more">閱讀論文 &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
