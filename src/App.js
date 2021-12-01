import './App.css';
import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { Home } from './Components/Page/MainViewPage/MainPage';
import { HomePageLogin } from './Components/Page/LoginViewPage/HomeLoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Login">
            <HomePageLogin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
