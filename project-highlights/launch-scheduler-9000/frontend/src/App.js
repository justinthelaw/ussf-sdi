import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Home from './components/Home'
import AppContext from './contexts/AppContext';
import NewLaunch from './components/NewLaunch';
import NewCustomer from './components/NewCustomer';
import NewUser from './components/NewUser';
import Login from './components/Login'

function App() {
  const [launchData, setLaunchData] = useState([])
  const [customerData, setCustomerData] = useState([])
  const [userData, setUserData] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false);
  const [loaded, setLoaded] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)


  return (
    <div className='main'>
      <AppContext.Provider value={{
        launchData, setLaunchData,
        customerData, setCustomerData,
        userData, setUserData,
        selectedDate, setSelectedDate,
        open, setOpen,
        openAlert, setOpenAlert,
        loaded, setLoaded,
        currentUser, setCurrentUser
      }}>
        <Router>
          <h1> Launch Scheduler 9000 </h1>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route exact path='/addUser'>
            <NewUser />
          </Route>

          <Route exact path='/addCustomer'>
            <NewCustomer />
          </Route>

          <Route exact path='/addLaunch'>
            <NewLaunch />
          </Route>
        </Router>
      </AppContext.Provider>
    </div >
  );
}

export default App;