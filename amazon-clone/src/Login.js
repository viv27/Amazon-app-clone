import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import { useHistory } from 'react-router-dom'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/')
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const handleRegister = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/')
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className="login">        
            <Link>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={handleLogin} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={handleRegister} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
