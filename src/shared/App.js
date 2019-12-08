import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import "./AppLogin.scss";
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';



class App extends Component {
  render(){
    
    return(
      <div>
        
          <div className="router-cont">
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <br/><br/>
            <Switch>
              <Route exact path="/" component={Home} />               
              <Route path="/about" component={About} />             
              <Route path="/dashboard" component={Dashboard} />           
            </Switch>
          </div>
          
          <div className="app">
            <div className="app-header">
              <h2>Welcome to React in the Server</h2>
            </div>
          </div>
          <p className="app-intro">
            Very nice app by UyduSoft
          </p>
          <div className="footer">
            Footer Yazı Yenidir Evet 12
          </div>
          <div className="footer2">
            Yeni footer geldi.
          </div>
       
      </div>
    )
  }
}
export default App;