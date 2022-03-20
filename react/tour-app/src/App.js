import './App.css';
import { React } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { Component } from 'react';
import Login from './core/login'
import Home from './core/home';
import Signup from './core/sign_up';
import CreateTour from './core/create_tour';
export default class App extends Component {

  render() {
    let token = window.sessionStorage.getItem('token')

    return <Router>
      <div>
        <ul>
          <li>
            <a href='https://www.github.com/omeraydemirr'>Tour API Service by Ömer Aydemir</a>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/createtour">
            <CreateTour/>
          </Route>



          <Route path="/signup">
            <Signup />
          </Route>

          {token === null ? <Redirect to='/login' />
            : <Redirect to='/home' />}

        </Switch>
      </div>
    </Router>
  }


}





