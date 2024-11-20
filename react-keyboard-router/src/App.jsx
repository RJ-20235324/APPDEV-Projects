import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Specification from './Specifications';
import KeyFeatures from './Keyfeatures';
import Setup from './Setup';
import Troubleshooting from './Troubleshooting';
import Maintenance from './Maintenance';
import './App.css';


export default function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={() => <h1>Welcome to KB-X1000 Documentation</h1>} />
            <Route path="/specifications" component={Specification} />
            <Route path="/key-features" component={KeyFeatures} />
            <Route path="/setup" component={Setup} />
            <Route path="/troubleshooting" component={Troubleshooting} />
            <Route path="/maintenance" component={Maintenance} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


