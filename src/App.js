import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import History from "./Components/History/History";

function App() {

  //eslint-disable-next-line
  const [state,dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if (authUser){
          dispatch({
            type: "SET_USER",
            user: authUser
          })
      }else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[dispatch])

  return (
      <div className="app">
        <Router>
          <Switch>
            <Route path={'/signup'}>
              <SignUp />
            </Route>
            <Route path={'/login'}>
              <Login/>
            </Route>
            <Route path={'/track-history'}>
              <History/>
            </Route>
            <Route path={'/dashboard'}>
              <Dashboard/>
            </Route>
            <Route path={'/'}>
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
