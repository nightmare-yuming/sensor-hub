const fs = require('fs');
const path = require('path');

const newsPath = path.join(__dirname, '../src/data/news.json');
const researchPath = path.join(__dirname, '../src/data/research.json');

// Helper to read JSON
const readJson = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return [];
    }
};

// Helper to write JSON
const writeJson = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Updated ${filePath}`);
    } catch (error) {
        console.error(`Error writing ${filePath}:`, error);
    }
};

// Generate new content
const generateNews = () => {
    const date = new Date().toISOString().split('T')[0];
    return {
        id: Date.now(),
        tag: "每日更新",
        title: `[${date}] 感測器科技日報`,
        content: "今日最新的感測器技術發展與市場動態摘要。自動化系統持續監測全球科技趨勢。"
    };
};

const generateResearch = () => {
    const date = new Date().toISOString().split('T')[0];
    return {
        id: Date.now(),
        date: date,
        title: `[${date}] 自動化感測器研究綜述`,
        content: "本週精選之感測器相關學術論文與技術報告，涵蓋材料科學至訊號處理領域。",
    };
};

// Main update function
const updateContent = () => {
    const news = readJson(newsPath);
    const research = readJson(researchPath);

    // Add new item to the beginning
    news.unshift(generateNews());
    research.unshift(generateResearch());

    // Keep only latest 10 items
    if (news.length > 10) news.length = 10;
    if (research.length > 10) research.length = 10;

    writeJson(newsPath, news);
    writeJson(researchPath, research);
};

updateContent();
