import React from 'react';
import RoutLinks from '../RouterLinks';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from '../../logo-riq-white.svg';

const header = () => {
return <header className="App-header" >
<div className="left-side">
    <img src={logo} className="logo" alt="logo" />
</div>
<div className="right-side">
<RoutLinks  className="dashbordmenu"/>
    
    
</div>
</header>
};

export default header;

