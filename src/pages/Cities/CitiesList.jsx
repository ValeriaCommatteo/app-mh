import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCities } from '../../services/api';

const CitiesList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const citiesData = await getCities();
      setCities(citiesData);
    };

    fetchCities();
  }, []);

  return (
    <div>
      <h2>Lista de Ciudades</h2>
      <div className="city-cards">
        {cities.map(city => (
          <div key={city._id} className="city-card">
            <img src={city.foto} alt={city.nombre} />
            <h3>{city.nombre}</h3>
            <Link to={`/city/${city._id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CitiesList;
