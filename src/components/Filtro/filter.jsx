import React, { useState } from 'react';
import Card from '../Card/Card';

const CityFilter = ({ cities }) => {
  const [filterText, setFilterText] = useState('');

  const filteredCities = cities.map(item => item.place).filter(city =>
    city.toLowerCase().startsWith(filterText.trim().toLowerCase())
  );

  return (
    <div>
      <input className='filter-input'
        type="text"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        placeholder="Find your next destination..."
      />
      <div className='filter-cards'>
        {cities.filter(item => filteredCities.includes(item.place)).map((city, index) => (
          <Card data={city} key={index} />
        ))}</div>
    </div>
  );
};


export default CityFilter;