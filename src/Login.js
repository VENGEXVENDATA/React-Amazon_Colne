import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'
function Login() {
    const history=useNavigate();
    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            alert("account created");
            if(auth){
                history('/');
            }
        })
        .catch(error=>alert(error.message))
    }
    const signIn=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history('/');
            })
            .catch(error=>alert(error.message))
    }
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
  return (
   <div className='login'>
    <Link to="/">
      <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/330px-Amazon_logo.svg.png" alt="" />
    </Link>
    <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
            <h5>Email</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <button type='submit' onClick={signIn} className='login_signInButton'>Sign in</button>
        </form>
        <p>
        By continuing, you agree to Amazon_Clone's Conditions of Use and Privacy Notice.
        </p>
        <button onClick={register} className='login_registerButton'>Create an Amazone Account</button>
    </div>
    </div>
  )
}

export default Login
