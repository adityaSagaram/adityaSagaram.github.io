import React, { Component } from 'react';
import './App.css';
import Mynav from './nav'
import Home from './home/home'
import Books from './books/books'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <div>
            <header className="mb-2">
              <Mynav className="mb-2" />
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/books" component={Books} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
