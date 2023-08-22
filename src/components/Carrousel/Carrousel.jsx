import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import Slider from "../Slider/slider"; // Asegúrate de importar el componente Slider o lo que necesites

const items = [

  [
    { id: 1, src: '/images/Agua.jpg' },
    { id: 2, src: '/images/India.jpg' },
    { id: 3, src: '/images/Arg.jpg' },
    { id: 4, src: '/images/torrePisa.jpg' }
  ],
  [
    { id: 5, src: 'Ny.jpg' },
    { id: 6, src: 'Cataratas.jpg' },
    { id: 7, src: 'España.jpg' },
    { id: 8, src: 'Grecia.jpg' }
  ],
  [
    { id: 9, src: 'BsAs.jpg' },
    { id: 10, src: 'London.jpg' },
    { id: 11, src: 'Ruinas.jpg' },
    { id: 12, src: 'Muelle.jpg' }
  ]
];

const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const slides = items.map((array, index) => (
    <Carousel.Item key={index}>
      <div className="slide-exterior-container">
        <Slider array={array} />
      </div>
    </Carousel.Item>
  ));

  return (
    <section>
      <div className="carrousel-h2">
        <h2>Popular MYTINERARIES!</h2>
      </div>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {slides}
      </Carousel>
    </section>
  );
}

export default Carrousel;