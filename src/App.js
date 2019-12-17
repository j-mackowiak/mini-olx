import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartViewPage from './components/StartPageView';
import AddAdView from './components/AddAdView/AddAdView';
import AdvertisementPage from './components/AdvertisementPage';
import CategoryPageView from './components/CategoryPageView';

function App() {
  return (
    <div className="App">
      <Router>
        <h1><Link to="/">Latest</Link></h1>
        <main>

          <Route path='/' component={StartViewPage} exact />
          <Route path='/add' component={AddAdView} exact />
          <Route path='/advertisements/:adId' component={AdvertisementPage} exact />
          <Route path='/:category' component={CategoryPageView} exact />
        </main>
      </Router>

    </div>
  );
}

export default App;
