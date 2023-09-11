import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCitiesAction from '../redux/actions/citiesActions';
import getItinerariesAction from '../redux/actions/itineraryActions.js';
import CardDetail from '../components/Card/CardDetail.jsx';
import CardItinerary from '../components/Card/cardItinerary.jsx';
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/cities/city';

function CityDetail() {

  let { id } = useParams();
  const dispatch = useDispatch();
  const cities = useSelector((store) => store.citiesR.cities);
  const itineraries = useSelector((store) => store.itinerariesR.itineraries);

  useEffect(() => {
    // Obtener datos de la ciudad)

    axios.get(`${API_URL}/${id}`)
      .then((response) => {
        dispatch(getCitiesAction.getCity(id));
      })
      .catch((error) => {
        console.error('Error fetching city data:', error);
      });

    // Obtener itinerarios

    dispatch(getItinerariesAction.get_itinerary(id));
  }, [dispatch]);

  return (
    <> 
     <CardDetail data={cities} />
      <div className="containerItineraries d-flex justify-content-center" style={{ marginTop: '50px', marginLeft: '120px' }}>
        {console.log(itineraries)}
        {itineraries ? (
          itineraries.map((itinerary, index) => (
            <CardItinerary key={index} itinerary={itinerary} />
          ))
        ) : (
          <h3 className="noResults" style={{ marginTop: '250px', marginLeft: '820px' }}>
            There are no itineraries <li><a href="/cities" style={{ marginLeft:'930px', color: 'indigo' }}>Back to cities</a></li>
          </h3>
          
        )}
        
      </div>
    </>
  );
}

export default CityDetail;
