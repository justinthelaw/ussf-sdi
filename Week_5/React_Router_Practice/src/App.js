import About from './About.js'
import Shop from './Shop.js'
import Nav from './Nav.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
      <nav>
        <ul>
        <Link exact to="/">
          <li>Home</li>
          </Link>
          <Link exact to="/about">
          <li>About</li>
          </Link>
          <Link exact to="/shop">
          <li>Shop</li>
          </Link>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Nav} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Router>
    );
  }
}

export default App;
