import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { auth, faceBookProvider, provider } from '../firebaseData';
import './Login.css'


export const Login = () => {

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signIn =() => {
    auth.signInWithPopup(provider).catch((e) => alert(e.message))
    console.log(auth)
  }

  const signInWithFacebook = () => {
    auth.signInWithPopup(faceBookProvider)
  }


  const handleLogin = (e) => {

    e.preventDefault()

    auth.signInWithEmailAndPassword(email,password).
    then((auth) => {
        if(auth){
          console.log(auth)
        }
    }).catch((e) => alert(e.message))

    setEmail("")
    setPassword("")
  }

  const handleRegister = (e) => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email,password).
    then((auth) => {
      console.log(auth)
    }).catch((e) => alert(e.message))

    setEmail("")
    setPassword("")
  }


  return (
    <>
      <div className='login'>
        <div className='login__container'>
          <div className='login__logo'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png'
              alt=''
            />
          </div>
          <div className='login_desc'>
            <p>A place to Share knowledge and better understand the world </p>
            {/* <p style={{ color: "royalblue", fontSize: "25px" }}>
              HandCrafted with ❤️ by{" "}
            </p> */}
            {/* <h3>Code With HK</h3> */}
          </div>
          <div className='login__auth'>
            <div className='login__authOptions'>
              <div className='login__authOption'>
                <img
                  className="login__googleAuth"
                  src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                  alt=""
                />
                <p onClick={signIn}>Continue With Google</p>
              </div>
              <div className="login__authOption">
                <img
                  className="login__googleAuth"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1gyneFWLl3-Sv5XcpoMZgvv0W5CyyA3lnqvSZYmp5A&s"
                  alt=""
                />
                <span onClick={signInWithFacebook}>Continue With Facebook</span>
              </div>
              <div className="login__authDesc">
                <p>
                  <span style={{ color: "blue", cursor: "pointer" }}>
                    Sign Up With Email
                  </span>
                  . By continuing you indicate that you have read and agree to
                  Quora's
                  <span style={{ color: "blue", cursor: "pointer" }}>
                    Terms of Service{" "}
                  </span>
                  and{" "}
                  <span style={{ color: "blue", cursor: "pointer" }}>
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="login__emailPass">
              <div className="login__label">
                <h4>Login</h4>
              </div>
              <div className="login__inputFields">
                <div className="login__inputField">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="login__inputField">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="login__forgButt">
                <small>Forgot Password?</small>
                <button type='submit' onClick={handleLogin}>Login</button>
              </div>
              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
          <div className="login__lang">
            <p>हिन्दी</p>
            <ArrowForwardIosIcon fontSize="small" />
          </div>
          <div className="login__footer">
            <p>About</p>
            <p>Languages</p>
            <p>Careers</p>
            <p>Businesses</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Contact</p>
            <p>&copy; Quora Fake Inc. 2021</p>
          </div>

        </div>
      </div>


    </>
  )
}
