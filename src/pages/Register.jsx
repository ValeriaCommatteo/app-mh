import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { register } from '../redux/actions/userActions';
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
    <form class="register" onSubmit={handleSubmit}>
      <p class="title-reg">Register </p>
      <p class="message-reg">Signup now and get full access to our app.</p>
      <div class="name-surname">
        <label>
        {""} Name
          <input required="" placeholder="" type="text" class="input" ref={name} />
        </label>
        <label>
        {""} Surname
          <input required="" placeholder="" type="text" class="input" ref={surname} />
        </label>
      </div>
      <label>
      {""} Photo
        <input required="" placeholder="" type="url" class="input" ref={photo} />
      </label>
      <label>
      {""} Email
        <input required="" placeholder="" type="email" class="input" ref={email} />
      </label>
      <label>
      {""} Password
        <input required="" placeholder="" type="password" class="input" ref={password} />
      </label>
      <div className="column">
        <div className="select-box">
        <select>
        {countries.length > 0 && countries.map((country) => (<option key={`opt-country-${country}`} value={country}>
              {""}
             {""} {country}</option>
              ))}
          </select>
        </div>
            <button className="submit">Submit</button>
            <p className="signin">Already have an acount ? <a rel="noopener noreferrer" href="#" className="" >Sign up</a>
        </p>
      </div>
    </form>
  );
}

export default Register;