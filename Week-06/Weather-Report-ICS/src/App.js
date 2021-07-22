import './styles/App.css';
import UserInput from './components/UserInput.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';

function App() {
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/app" className="App-header">
          <UserInput />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
