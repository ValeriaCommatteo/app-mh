import React from 'react';
import data from '../../data.json'; // Reemplaza con la ruta correcta

const Slider = () => {
    const groupSize = 4;

    const groupedData = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groupedData.push(data.slice(i, i + groupSize));
    }
  return (
    <div>
    {groupedData.map((group, groupIndex) => (
      <div key={groupIndex} className="group-container">
        {group.map(item => (
          <div key={item.imagen} className="image-item">
            <img src={item.imagen} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <p>{item.dato}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
  );
};

export default Slider;

