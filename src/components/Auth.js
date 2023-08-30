import React, { useState } from 'react'

const Auth = () => {

  const [hello, setHello] = useState(true);
  const [reg, setReg] = useState(false);
  const [login, setLogin] = useState(false);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const register = (e) => {
    e.preventDefault();
    setReg(true);
    setHello(false);
  }

  const log = (e) => {
    e.preventDefault();
    setHello(false);
    setLogin(true);
  }

  const signUp = (e) => {
    e.preventDefault()
    console.log(email);
    console.log(pass);
    console.log(name);
  }

  const signIn = (e) => {
    e.preventDefault()
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
              <form onSubmit={signUp} className='register'>
                <input 
                  type='email' 
                  className='register-email' 
                  placeholder='Enter your email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input 
                  type='password' 
                  className='register-pass' 
                  placeholder='Enter your password'
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                ></input>
                <input 
                  type='text' 
                  className='register-name' 
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <button className='register-btn'>SignUp</button>
              </form>
          )}

          {login && (
              <form onSubmit={signIn} className='login'>
                <input type='email' classname='login-email' placeholder='Enter your email'></input>
                <input type='pass' className='login-pass' placeholder='Enter your pass'></input>
                <button className='login-btn'></button>
              </form>
          )}
        </div>
      </div>
    </>
  )
}

export default Auth
