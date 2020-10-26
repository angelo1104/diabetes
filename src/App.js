import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import {auth, database} from "./firebase";
import {useStateValue} from "./StateProvider";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import History from "./Components/History/History";

function App() {

  //eslint-disable-next-line
  const [{user,history},dispatch] = useStateValue()

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

  useEffect(()=>{
    const lastValue = history[0];
    if (history[1]){
      const secondLastValue = history[1];
      if (parseFloat(lastValue.value) < parseFloat(secondLastValue.value)){
        dispatch({
          type: 'SET_TREND',
          trend: 'There is a improvement in your condition. Hats-off to you.'
        })
      }else if (parseFloat(lastValue.value) === parseFloat(secondLastValue.value)){
        dispatch({
          type: 'SET_TREND',
          trend: 'Your condition is same as before. Have you not followed our instructions? Try our diet plan for a healthy life.'
        })
      }else {
        dispatch({
          type: 'SET_TREND',
          trend: 'Your condition is worse than last time. Try our diet plan and consult the Doc for more information on your problem.'
        })
      }
    }

  },[history, dispatch])

  useEffect(()=>{

    if (user){
      database.collection('users')
          .doc(user?.email)
          .collection('history')
          .orderBy('timestamp','desc')
          .limit(4)
          .onSnapshot(snapshot => {
            dispatch({
              type: 'SET_HISTORY',
              history: snapshot.docs.map(doc=>{
                return {
                  id: doc.id,
                  ...doc.data(),
                }
              })
            })
          })
    }
  },[user, dispatch])

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
