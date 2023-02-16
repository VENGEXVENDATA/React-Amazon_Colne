import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{},dispatch]=useStateValue();


  useEffect(()=>{
  //will run only once when app componet loads
    auth.onAuthStateChanged(authUser=>{
      console.groupCollapsed('the user is>>>',authUser)
    if(authUser){
      //the user just logged in/was logged out
        dispatch({
          type:'SET_USER',
          user:authUser
        })
    }else{
      //the user just logged out
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
    })
},[])
  return (
    <Router>
    <div className="app">
      <Routes>
      {/* Header */}
     <Route path='/' element={[<Header/>,<Home/>]} />
     <Route path='/checkout' element={[<Header/>, <Checkout/>]} />
     <Route path='/login' element={[<Login/>]} />
      {/* Home */}
    </Routes>
    </div>
  </Router>
  );
}

export default App;
