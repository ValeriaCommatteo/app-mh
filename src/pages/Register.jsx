import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import userActions from '../redux/actions/userActions';
import { GoogleLogin } from '@react-oauth/google';
import decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import './Style/register.css';


const Register = () => {

  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();
  const name = useRef(null);
  const surname = useRef(null);
  const photo = useRef(null);
  const country = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const aux = [name, surname, photo, country, email, password];

    if (aux.some((field) => !field.current.value)) {
      alert("All the fields are required")
    } else {
      const body = {
        name: name.current.value,
        surname: surname.current.value,
        photo: photo.current.value,
        country: country.current.value,
        email: email.current.value,
        password: password.current.value
      };
      dispatch(userActions.register(body)).then((response) => {
        if (response.payload.user) {
          navigate("/");
        };
      });
    };
  }

  const registerWithGoogle = ( credentialResponse ) => {
    
    const dataUser = decode (credentialResponse.credential);

    const body = {
      name: dataUser.name,
      surname: dataUser.surname,
      photo: dataUser.photo,
      email: dataUser.email,
      password: dataUser.name + dataUser.sub,
    };

    dispatch(userActions.register(body));
  };

  return (

    <div className="contenedor">
      <div className="tarjeta">
        <h3>Registration Form</h3>
      <form className="d-flex flex-column justify-center items-start gap-3 form" action="#" onSubmit={handleSubmit}>
        <div className="column">
          <div className="input-box">
            <label>{" "}Name</label>
            <input type="text" name="name" ref={name} />
          </div>
          <div className="input-box">
            <label>{" "}Surame</label>
            <input type="text" name="surname" ref={surname} />
          </div>
        </div>
        <div className='input-box'>
          <label>{" "}Image</label>
          <input type="text" name="image" ref={photo} />
        </div>
        <div className="select-box">
          <select name="country" ref={country}>
            {countries.length > 0 &&
              countries.map((country) => (
                <option key={`opt-country-${country}`} value={country}>
                  {" "}
                  {country}{" "}
                </option>
              ))}
          </select>
        </div>
        <div className="input-box">
          <label>{" "}Email</label>
          <input type="email" name="email" ref={email} />
        </div>
        <div className="input-box">
          <label>{" "}Password</label>
          <input type="password" name="password" ref={password} />
          <div className="column">
          </div>
        </div>
        <button>Register</button>
        <GoogleLogin onSuccess={ registerWithGoogle } onError={() => { console.log('Login Failed') }}/>
      </form>
      </div>
    </div>
  );
};


export default Register;