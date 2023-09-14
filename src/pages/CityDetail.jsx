import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import getCitiesAction from '../redux/actions/citiesActions';
import getItinerariesAction from '../redux/actions/itineraryActions.js';
import CardItinerary from '../components/Card/cardItinerary.jsx';
import CardCity from '../components/Card/cardCity.jsx';
import { getCity } from '../service/citiesService';
import { Link } from "react-router-dom";
// import axios from 'axios';

// const API_URL = 'http://localhost:4000/api/cities/city';

function CityDetail() {

  let { id } = useParams();
  const dispatch = useDispatch();
  const cities = useSelector((store) => store.citiesR.cities);
  const itineraries = useSelector((store) => store.itinerariesR.itineraries);

  useEffect(() => {
    // Obtener datos de la ciudad)

    getCity(id)
      .then((data) => {
        dispatch(getCitiesAction.get_city(data));
      })
      .catch((error) => {
        console.error('Error fetching city data:', error);
      });
  }, [])

  useEffect(() => {
    // Obtener itinerarios

    dispatch(getItinerariesAction.get_itinerary(id));
  }, [dispatch]);

  return (
    <>
      {itineraries ? (
        <>
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <Col style={{ padding: '5px', marginTop:'5px', marginBottom:'15px' }} md={2}>
            <CardCity data={cities}/>
          </Col>
        </Row>

        <div className="container">
          <div className="d-flex justify-content-center">
            {itineraries.map((itinerary, index) => (
              <CardItinerary key={index} itinerary={itinerary} />
            ))}
          </div>
        </div>
        </>
      ) : (
        <>
        &nbsp;
        <h3 className="noResults"  style={{ marginTop:'15px'}}>There are no itineraries</h3>
        <Link to="/cities" className='d-flex flex-column align-items-center'>Back to the cities </Link>
        </>
      )}
    </>
  );
}

export default CityDetail;
