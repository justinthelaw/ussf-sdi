import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Watermelon from './Watermelon'
import Sunscreen from './Sunscreen'

function Products() {
  return (
    <div>
      <h2>Products Page</h2>
      <Router>
      <nav>
        <ul>
          <Link exact to="/products/watermelon">
            <li>Watermelon</li>
          </Link>
          <Link exact to="/products/sunscreen">
            <li>Sunscreen</li>
          </Link>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/products/watermelon" component={Watermelon}/>
        <Route exact path="/products/sunscreen" component={Sunscreen}/>
      </Switch>
      </Router>
    </div>
  );
}

export default Products;