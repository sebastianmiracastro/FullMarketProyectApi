import './App.css';
import { HomePageLogin } from './Components/Page/HomePageLogin/HomePageLogin';
import { Home } from './Components/Page/Home/Home.jsx';
import { HomePageRegister } from './Components/Page/HomePageRegister/HomePageRegister';
import { HomePageUserProfile } from './Components/Page/HomePageUserProfile/HomePageUserProfile'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>        
        <Route exact path="/Login">
          <HomePageLogin />
        </Route>
        <Route exact path="/Register">
          <HomePageRegister />
        </Route>     
        <Route exact path="/UserProfile">
          <HomePageUserProfile />
        </Route>
      </Switch>      
    </Router>
  );
}
