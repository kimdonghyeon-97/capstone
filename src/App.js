import React, { Component } from 'react';
import './App.css';

import Title from './components/title';
import SearchBar from './components/search_bar';
import AdminLogin from './components/admin_login';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import HomeCondition from './components/homecondition';
import SearchButton from './components/search_button';
import AdminPage from './components/adminpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Route exact path='/Next' component={AdminPage}/>
        <Route exact path='/' component={AdminLogin}/>
        <Route exact path='/' component={Title}/>
        <center><Route exact path='/' component={SearchBar}/>&nbsp;&nbsp;<Route exact path='/' component={SearchButton}/></center><br></br>
        <Route exact path='/' component={HomeCondition}/>
        </Router>
      </div>
    );
  }
}

export default App;
