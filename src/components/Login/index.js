import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../firebase';
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginHandler = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth) =>{
            history.push('/')
        } ).catch((err)=>{
            alert(err.message)
        })
    }
    const registerHandler = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
           if(auth){
               history.push("/")
           }
        }).catch((err)=>{
           alert(err.message)
        })
    }
    return (
        <div className="login">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <button type="submit" onClick={loginHandler} className="login__button">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
               </p>
                <button onClick={registerHandler} className="account__button">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
