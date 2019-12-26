import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartViewPage from './components/StartPageView';
import AddAdView from './components/AddAdView';
import AdvertisementPage from './components/AdvertisementPage';
import CategoryPageView from './components/CategoryPageView';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/"><h1>Latest</h1></Link>
        <main>
          <Route path='/' component={StartViewPage} exact />
          <Route path='/add' component={AddAdView} exact />
          <Route path='/advertisements/:adId' component={AdvertisementPage} />
          <Route path='/:category' component={CategoryPageView} />
        </main>
      </Router>
    </div>
  );
}

export default App;
