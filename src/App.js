import React from 'react';
import Navbar from './components/Frame/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Admin from './components/pages/Admin';
import Footer from './components/Frame/Footer';
import Map from './components/pages/Map'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={SignUp} />
          <Route path='/login' component={SignIn} />
          <Route path='/map' component={Map} />
          <Route path='/admin' component={Admin} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
