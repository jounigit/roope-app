import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/nav/Navbar';
// import Header from './components/Header';
import About from './pages/About';
import Albums from './pages/Albums';
import GlobalStyles from './styles/GlobalStyles';
import { SiteContent } from './styles/styles';

const App: React.FC = () => (
  <>
    <Router>
      <GlobalStyles />
      <Navbar />
      <SiteContent>
        <Switch>
          <Route path="/" exact>
            <Albums />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </SiteContent>
      <Footer />
    </Router>
  </>
);

export default App;
