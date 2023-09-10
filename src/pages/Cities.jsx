import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import citiesActions from '../redux/actions/citiesActions';
import Search from '../components/Search/index';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from '../components/Card/index';
import './Style/citiesStyle.css'

function Cities() {
  const cities = useSelector((store) => store.citiesR.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities")
      .then((response) => {
        dispatch(citiesActions.get_cities(response.data));
      });
  }, []);

  const handleSubmit = (value) => {
    if (value) {
      getAllCities(value)
        .then((res) => dispatch(getCitiesAction.get_cities(res)))
        .catch((err) => console.log(err));
    } else {
      runGetAllCities();
    }
  };

  return (

    <Container fluid className="d-flex flex-column justify-content-center align-items-center">
       <Row>
         <Search onSubmitProp={handleSubmit}/>
      </Row>
      <Row style={{ width:'1350px'}}>
      <font size='6' color="indigo">Cities</font>
            <h4>Collection of the most beatifull pleaces and experience</h4>
        {cities.length > 0 ? (
          cities.map((data) => (
            <Col style={{ padding: '5px'}} key={data.id} md={3}>
              <CardComponent src={data.urlimage} city={data.city} country={data.country} id={data._id} />
            </Col>
          ))
        ) : (
          <h2 className="text-center">At the moment there are no results</h2>
        )}
      </Row>
      </Container>
  )
}

export default Cities