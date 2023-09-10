import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import data from '../../data/data.json';
import './style.css';
import { CarouselControl } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


const itemsPerGroup = 4;
const groupedItems = [];
for (let i = 0; i < data.length; i += itemsPerGroup) {
  groupedItems.push(data.slice(i, i + itemsPerGroup));
}

const Carrousel = ({ item }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === groupedItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? groupedItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = groupedItems.map((group, groupIndex) => (
    <CarouselItem key={groupIndex}>
      <div  className="slide-exterior-container">
        {group.map(item => (
          <div key={item.imagen} className="image-item">
            <img src={item.imagen} alt={item.nombre} className='imagenes' style={{ objectFit: 'cover' }}/>
            <h5>{item.country}</h5>
          </div>
        ))}
      </div>
    </CarouselItem> 
  ));

  // Dentro del componente Carrousel
  return (
    <section className="carousel-section">
      <h2 >Most Populars!</h2>
      <Carousel className="carrousel" activeIndex={activeIndex}>{slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="carousel-control-prev">
        </CarouselControl>
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="carousel-control-next">
        </CarouselControl>
      </Carousel>
    </section>
  );
}

export default Carrousel;
