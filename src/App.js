import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LandingPage } from './components/pages';
import { ScrollTop } from './components/scroll';
import { AboutPage } from './components/pages';
import { PortFolioPage } from './components/pages';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <LandingPage/>
        <AboutPage/>
        <PortFolioPage/>
        <ScrollTop/>
      </div>
    );
  }
}

export default App;
