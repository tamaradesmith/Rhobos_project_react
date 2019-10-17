import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.css'
import './App.css';
import NodeIndex from "./components/NodeIndex"
import NavBar from './components/partials/NavBar';
import DeviceShow from './components/DeviceShow';
import DashBoard from './components/Dashboard';


function App() {
  return (
    <Router className="App">

      <NavBar />

      <Switch>
        <Route path="/" exact component={NodeIndex} />
        <Route path="/devices/:id"
          render={routeProps => (
            <DeviceShow {...routeProps} />
          )}
        />
        <Route path="/device/:id/dashboard" render={routeProps =>(
          <DashBoard {...routeProps} />
          )}
           />
        
      </Switch>

    </Router>
  );
}

export default App;
