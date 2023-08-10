import React from "react";
// import HoverCarousel from "hover-carousel";

// const Carrousel = () => {
//   const images = [
//     'Agua.jpg',
//     'India.jpg',
//     'Arg.jpg',
//     'Ny.jpg',
//     'Cataratas.jpg',
//     'España.jpg',
//     'torrePisa.jpg',
//     'Grecia.jpg',
//     'Muelle.jpg',
//     'BsAs.jpg',
//     'London.jpg',
//     'Ruinas.jpg']

//   return (
//     <div>
//       <HoverCarousel images={images} />
//     </div>
//   );
// };

// export default Carrousel;

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import '../Carrousel/style.css'; // Asegúrate de tener estilos CSS para personalizar el carrusel

const Carrousel = () => {
  return (
    <Carousel>
    <div className="four-images-container">
      <img src="Agua.jpg" alt="Slide 1" />
      <img src="India.jpg" alt="Slide 1" />
      <img src="Arg.jpg" alt="Slide 1" />
      <img src="Ny.jpg" alt="Slide 1" />
    </div>
    <div>
      <img src="Cataratas.jpg" alt="Slide 2" />
      <img src="España.jpg" alt="Slide 2" />
      <img src="torrePisa.jpg" alt="Slide 2" />
      <img src="Grecia.jpg" alt="Slide 2" />
    </div>
    <div>
      <img src="Muelle.jpg" alt="Slide 3" />
      <img src="BsAs.jpg" alt="Slide 3" />
      <img src="London.jpg" alt="Slide 3" />
      <img src="Ruinas.jpg" alt="Slide 3" />
    </div>
  </Carousel>
);
};

export default Carrousel;