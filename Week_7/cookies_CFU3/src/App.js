import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (

    <Router className="App">
      <nav>
        <ul>
          <li><Link exact to='/'>Home</Link></li>
          <li><Link exact to='/login'>Login</Link></li>
        </ul>
      </nav>
      <header className="App-header">

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </header>
    </Router>

  );
}

export default App;
