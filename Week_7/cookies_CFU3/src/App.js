import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (

    <Router className="App">
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
      <header className="App-header">

        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </header>
    </Router>

  );
}

export default App;
