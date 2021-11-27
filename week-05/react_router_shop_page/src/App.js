import './App.css';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
