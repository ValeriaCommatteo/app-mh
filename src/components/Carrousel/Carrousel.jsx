import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import data from '../../data.json';
import './style.css';
import { CarouselControl } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


const itemsPerGroup = 4;
const groupedItems = [];
for (let i = 0; i < data.length; i += itemsPerGroup) {
  groupedItems.push(data.slice(i, i + itemsPerGroup));
}

const Carrousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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
    setActiveIndex(newIndex);
  }

  const slides = groupedItems.map((group, groupIndex) => (
    <CarouselItem
      key={groupIndex}>
      <div className="slide-exterior-container">
      <div className="carrousel-h2">
        <h2> Most Populars!</h2>
      </div>
        {group.map(item => (
          <div key={item.imagen} className="image-item">
            <img src={item.imagen} alt={item.nombre} />
            <h2>{item.nombre}</h2>
          </div>
        ))}
      </div>
    </CarouselItem>
  ));

  // Dentro del componente Carrousel
  return (
    <section className="carousel-section">
      <Carousel className="carrousel" activeIndex={activeIndex}>
        <CarouselIndicators items={groupedItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          className="carousel-control-prev"
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </CarouselControl>
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          className="carousel-control-next"
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </CarouselControl>

      </Carousel>
    </section>
  );
}

export default Carrousel;