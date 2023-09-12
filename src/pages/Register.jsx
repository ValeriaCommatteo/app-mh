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
    <div className="d-flex col-10 justify-center items-center">
      <form
        className="d-flex flex-column justify-center items-start gap-5 bg-gray-200 p-5"
        onSubmit={handleSubmit}
      >
        <label className="border">
          {" "}
          Name
          <input type="text" name="name" ref={name} required />
        </label>
        <label>
          {" "}
          email
          <input type="email" name="email" ref={email} />
        </label>
        <label>
          {" "}
          password
          <input type="password" name="password" ref={password} />
        </label>
        <label>
          {" "}
          Image
          <input type="text" name="image" ref={photo} />
        </label>
        <label>
          {" "}
          country
          <select name="country" ref={country}>
            {countries.length > 0 &&
              countries.map((country) => (
                <option key={`opt-country-${country}`} value={country}>
                  {" "}
                  {country}{" "}
                </option>
              ))}
          </select>
        </label>
        <button className="btn btn-secondary">Register</button>
      </form>
    </div>
  );
};


export default Register;