import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import getCitiesAction from '../redux/actions/citiesActions';
import getItinerariesAction from '../redux/actions/itineraryActions.js';
import CardItinerary from '../components/Card/cardItinerary.jsx';
import CardCity from '../components/Card/cardCity.jsx';
import { getCity } from '../service/citiesService';
// import axios from 'axios';

const API_URL = 'http://localhost:4000/api/cities/city';

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
     <Row style={{ padding: '10px', marginTop:'100px'}}>
      {console.log('cities desde citydetail')}
      {console.log(cities)}
     <CardCity data={cities}/>
      </Row>
      <div className="container">
        <div className="d-flex justify-content-center">
          {itineraries ? (
            itineraries.map((itinerary, index) => (
              <CardItinerary key={index} itinerary={itinerary} />
            ))
          ) : (
            <>
              <h3 className="noResults">There are no itineraries</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CityDetail;
