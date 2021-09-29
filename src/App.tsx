import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Albums from './pages/Albums';

import './styles.css';

const App: React.FC = () => (
  <Router>
    <Header />
    <Route path="/" exact>
      <Albums />
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
  </Router>
);

export default App;
