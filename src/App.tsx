import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
// import Header from './components/Header';
import About from './pages/About';
import Albums from './pages/Albums';

import './styles.css';

const App: React.FC = () => (
  <Router>
    {/* <Header /> */}
    <Navbar />
    <Route path="/" exact>
      <Albums />
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
  </Router>
);

export default App;
