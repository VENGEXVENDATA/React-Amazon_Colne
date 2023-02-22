import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise =loadStripe('pk_test_51MeA4JSFTBNt49E6EWzJML5ay6S06MLYTZT45VzpnSlw2ev2uAxDAdXouZSA2mSRbeGxyIpkHiw9ZNnASqGfrCEh00qGdK9D3J')
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
     <Route path='/payment' element={[<Header/>,<Elements stripe={promise}><Payment/></Elements>]} />
      {/* Home */}
    </Routes>
    </div>
  </Router>
  );
}

export default App;
