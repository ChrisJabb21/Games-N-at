import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Home";
import Prices from "./Prices";
import Deals from "./Deals";
import Games from "./Games";
import Hours from "./Hours";



class Main extends Component {
  render () {

    return (
        <HashRouter>
        <div>
            {/* NAVBAR */}

      {/* <Navbar bg="dark" variant="dark"> */}
            <div  className = "head">
            <h1 >Games N'at</h1>
            <img src="\images\nnzeecf6.bmp"></img>
            <h5> It's a Pittsburgh Thing</h5>
            </div>
        	{/* NAVIGATION LINKS */}
            <Navbar>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/prices">Prices</NavLink></li>
                <li><NavLink to="/deals">Deals</NavLink></li>
                <li><NavLink to="/games">Games</NavLink></li>
                <li><NavLink to="/hours">Hours & Map </NavLink></li>
            </ul>
            </Navbar>
            {/* CONTAINER TO LOAD CONTENT  */}

            <div className="content">
                <Route exact path= '/' component={Home}/>
                <Route path ="/prices" component={Prices}/>
                <Route path ="/deals" component={Deals}/>
                <Route path ="/games" component={Games}/>
                <Route path ="/hours" component={Hours}/>
            </div>
            {/* </Navbar> */}
        </div>
        </HashRouter>
    );
  }  
}

export default Main;