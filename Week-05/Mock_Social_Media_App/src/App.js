import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Profiles from './components/Profiles'
import ProfileImage from './components/ProfileImage'

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profiles/:id/profile-image' component={ProfileImage} />
      </Switch>
    </Router>
  );
}

export default App;