import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userActions from '../redux/actions/userActions';
import { GoogleLogin } from '@react-oauth/google';
import decode from "jwt-decode";
import './Style/signIn.css';

const SignIn = () => {

  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const aux = [email, password];

    if (aux.some((field) => !field.current.value)) {
      alert("Old the field are required")
    } else {
      const body = {
        email: email.current.value,
        password: password.current.value
      };
      dispatch(userActions.signIn(body)).then((response) => {
        if (response.payload.user) {
          navigate("/");
        }
      });
    };
  }

  const signInWithGoogle = (credentialResponse) => {
    const dataUser = decode(credentialResponse.credential)
    const body = {
      email: dataUser.email,
      password: dataUser.name + dataUser.sub,
    }
    dispatch(userActions.signIn(body)).then((actionResponse) => {
      if (actionResponse.payload.user) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className='general'>
        <div className="tarjeta">
          <p className="title-log">Login</p>
          <form className="form"  onSubmit={handleSubmit}>
            <div className="input-group">
              <label> {" "}Email</label>
              <input type="text" name="email" id="email" placeholder="" ref={email} />
            </div>
            <div className="input-group">
              <label>{" "}Password</label>
              <input type="password" name="password" id="password" placeholder="" ref={password} />
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
              </div>
            </div>
            <button className="sign">Sign in</button>
          </form>
          <div className="social-message">
            <div className="line"></div>
            <p className="message">Login with social accounts</p>
            <div className="line"></div>
          </div>
          <GoogleLogin onSuccess={ signInWithGoogle } onError={() => { console.log('Login Failed') }}/>
        </div>
      </div>
    </>
  );
}

export default SignIn;