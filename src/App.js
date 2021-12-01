import './App.css';
import { HomePageLogin } from './Components/Page/HomePageLogin/HomePageLogin';
import { Home } from './Components/Page/Home/Home.jsx';

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
      </Switch>      
    </Router>
  );
}
