import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../firebase'

const Auth = () => {

  const [hello, setHello] = useState(true);
  const [reg, setReg] = useState(false);
  const [login, setLogin] = useState(false);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const [passError, setPassError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [loginError, setLoginError] = useState(false)

  const nav = useNavigate();

  const register = (e) => {
    e.preventDefault();
    setReg(true);
    setHello(false);
    setLogin(false)
  }

  const log = (e) => {
    e.preventDefault();
    setHello(false);
    setLogin(true);
  }

  const back = (e) => {
    e.preventDefault();
    setLogin(false);
    setReg(false);
    setHello(true)
  }

  const signUp = async(e) => {
    e.preventDefault();
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(pass)){
      setPassError(true);
      return;
    }else{
      setPassError(false);
    }
    if(!/^[a-zA-Z]+$/){
      setNameError(true);
      return;
    }else{
      setNameError(false);
    }
    try{
      await createUserWithEmailAndPassword(auth, email, pass);
      nav('/home')
      console.log('Success')
    }
    catch(error){
      console.error('Error', error)
    }
  }

  const signIn = async(e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, pass);
      setLoginError(false)
      nav('/home')
    }
    catch(error){
      console.error('Ошибка', error)
      setLoginError(true)
    }
  }

  return (
    <>
      <div className='wrapper'>
        <div className='box'>
          <div className='box-rotation-first'></div>
          <div className='box-rotation-second'></div>

          {hello && (
            <p className='hello-title'>Hello, if you need generated password please <span className='hello-reg' onClick={register}>Register</span> or <span className='hello-log' onClick={log}>Login</span> in your account.</p>
          )}
          
          {reg && (
            <div className='register'>
              <form onSubmit={signUp}>
                <div className='register-block'>
                  <input 
                    type='email' 
                    className='register-email' 
                    placeholder='Enter your email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className='register-block'>
                  {passError === true ? <p className='register-block-error'>min 6 sumbols, 1 upper/lowercase and number.</p> : ''}
                  <input 
                    type='password' 
                    className='register-pass' 
                    placeholder='Enter your password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  ></input>
                </div>
                <div className='register-block'>
                  {nameError === true ? <p className='register-block-error'>field must contain only letters</p> : ''}
                  <input 
                    type='text' 
                    className='register-name' 
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className='register-block-btn'>
                  <button type='submit' className='register-btn'>SignUp</button>
                </div>
              </form>  
              <div className='back-reg' onClick={back}></div>
            </div>             
          )}

          {login && (
            <div className='login'>
              <form onSubmit={signIn} className='login-box'>
                <div className='login-block'>
                  <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email' 
                    className='login-email' 
                    placeholder='Enter your email'
                  ></input>
                </div>
                <div className='login-block'>
                  <input 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type='password' 
                    className='login-pass' 
                    placeholder='Enter your pass'
                  ></input>
                </div>
                <div className='login-block-btn'>
                  <button className='login-btn' type='submit'>SignIn</button>
                </div>
                <div className='login-error-block'>
                  {loginError === true ? <p className='login-error-block-text'>Incorrect entered email/password. If you do not have account <span onClick={register} className='hello-reg'>SignUp</span></p> : ''}
                </div>
              </form>
              <div className='back-log' onClick={back}></div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Auth
