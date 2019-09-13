import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import RouterLinks from './Component/RouterLinks';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Myaccount from './Component/Myaccount';
import Home from './Component/Home';
import './App.css';
import Header from './Component/Header/Header';
import LeftSide from './Component/LeftSide/LeftSide';
import Contact from './Component/Contact';
import Practice from './Component/Practice';
//import Post from './Component/Container';
//import gird from './@material-ui/core/gird'

export function App() {
  return (
    <div className="container">
      <Router>
          <div>
            <Header className="header" />
            <LeftSide></LeftSide>
            <div className="content">
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Contact' component={Contact} />
                  <Route exact path='/Login' component={Login}/>
                  <Route exact path='/Signup' component={Signup}/>
                  <Route exact path='/Myaccount' component={Myaccount}/>
                  <Route exact path='/Practice' component={Practice}/>
              </Switch>
            </div>
          </div>
        
        </Router>
        
    </div>
  );
}


export default App;






