import  React, { useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions';
import getItinerariesAction from '../redux/actions/itineraryActions.js';
import CardDetail from '../components/Card/CardDetail.jsx';
import CardItinerary from '../components/Card/cardItinerary.jsx';
import axios from 'axios';

function CityDetail() {

    const { id } = useParams();
  
    const cities = useSelector((store) => store.citiesR.cities);
    const citydispatch = useDispatch();
  
    console.log(cities)

    useEffect(() => {
      axios.get("http://localhost:4000/api/cities/city/" + id)
        .then((response) => {
          citydispatch(citiesActions.get_cities(response.data));
        });
    }, []);

    console.log(cities)
    
    const itineraries = useSelector(store => store.itinerariesR.itineraries); /*REVISAR APARTIR DE ACA*/
    const dispatch = useDispatch();
    
    useEffect(() => {    
      dispatch(getItinerariesAction.get_itineraries(id))
    }, [])
  
    return (
      <>
        <CardDetail data={cities} />
        <div className='containerItineraries'>
          { itineraries ? (
              itineraries.map((data)=><CardItinerary 
                key={data._id}
                nombre={data.name} 
                foto={data.urlimg} 
                precio={data.price} 
                duracion={data.duration} 
                likes={data.likes}
                hashtags={data.hashtags}
                comentarios={data.comments}
              />)
            ) : (
              <h3 className='noResults'>There are not itineraries</h3>
            )
          }
          <Link to="/cities" className='return__btn'>Back to cities</Link>
        </div>
      </>
    )
  }
  
  export default CityDetail