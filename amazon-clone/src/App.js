import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import Login from './Login'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout.js'
import { auth } from './firebase'
import './App.css';
import { useStateValue } from './StateProovider';
import { ACTION_TYPES } from './reducer';

function App() {
  const [, dispatch] = useStateValue()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: ACTION_TYPES.SET_USER,
          user: authUser
        })
      } else {
        dispatch({
          type: ACTION_TYPES.SET_USER,
          user: null
        })
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>        
        </Router>
      </div>  
  );
}

export default App;
