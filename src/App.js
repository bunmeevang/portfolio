import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/project' component={Project} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
