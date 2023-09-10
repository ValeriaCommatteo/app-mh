import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { register } from '../redux/actions/userActions';
import './Style/signIn.css';

const Register = () => {

  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();
  const name = useRef(null);
  const surname = useRef(null);
  const photo = useRef(null);
  const country = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    axios("http://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const aux = [name, surname, photo, country, email, password];

    if (aux.some((campo) => !campo.current.value)) {
      alert("Old the CAMPOS are required")
    } else {
      const body = {
        name: name.current.value,
        surname: surname.current.value,
        photo: photo.current.value,
        country: country.current.value,
        email: email.current.value,
        password: password.current.value
      };
      dispatch(register(body));
    }
  };

  return (
    <section class="container">
      <form class="form" onSubmit={handleSubmit}>
        <div class="input-box">
          <label>
            {""} Name
            <input required="" placeholder="Enter name" type="text" ref={name} /></label>
        </div>
        <div class="column">
          <div class="input-box">
            <label>{""} Surname
              <input required="" placeholder="Enter surnema" type="text" /></label>
          </div>
          <div class="input-box">
            <label>{""} Photo
              <input required="" placeholder="Enter your photo" type="url" /></label>
          </div>
        </div>
        <div class="gender-box">
          <label>{""} Email
            <input required="" placeholder="Enter your email" type="text" /></label>
        </div>
        <div class="gender-box">
          <label>{""} Password
            <input required="" placeholder="Enter your password" type="text" /></label>
        </div>
        <div class="input-box address">
          <label>{""} Country</label>
          <input required="" placeholder="Enter street address" type="text" />
          <div class="column">
            <div class="select-box">
              <select name="country" ref={country}>
                {countries.length > 0 && countries.map((country) => (<option key={`opt-country-${country}`} value={country}>
                  {""}
                  {country} {""}
                </option>
                ))}
              </select>
            </div>
            <input required="" placeholder="Enter your city" type="text" />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Register;