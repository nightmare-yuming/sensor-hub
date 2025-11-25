import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Applications from './pages/Applications';
import Research from './pages/Research';
import News from './pages/News';
import Theories from './pages/Theories';
import SensorStructures from './pages/SensorStructures';
import Electronics from './pages/Electronics';
import Circuits from './pages/Circuits';
import Electromagnetics from './pages/Electromagnetics';

function App() {
  return (
    <Router basename="/sensor-hub">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/news" element={<News />} />
          <Route path="/theories" element={<Theories />} />
          <Route path="/structures" element={<SensorStructures />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/circuits" element={<Circuits />} />
          <Route path="/electromagnetics" element={<Electromagnetics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
