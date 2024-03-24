import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.config'
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddUser } from '../components/redux/ShoppingCart';
import './Admin.css'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pswd)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
      // ...
      navigate('/home')
      dispatch(AddUser(name))
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        <label>Enter your email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
              </label>
              <label>Enter your password:
        <input
          type="text" 
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
        />
              </label>
              
        <button>Submit</button>
        <h1 className='navigate' >Have a account?  <Link to={`/login`}>
                       <span>Login</span>
                    </Link></h1>
      </form>
     
    </div>
  )
}

export default Signup