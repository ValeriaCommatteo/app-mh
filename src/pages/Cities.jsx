import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import getCitiesAction from '../redux/actions/citiesActions';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import CardComponent from '../components/Card/index';
import './Style/citiesStyle.css';

const API_URL = 'http://localhost:4000/api/cities';

function Cities() {
  const cities = useSelector((store) => store.citiesR.cities);
  const dispatch = useDispatch();
  const inputSearch = useRef(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Realiza la solicitud HTTP al montar el componente
    axios.get(API_URL)
      .then((response) => {
        dispatch(getCitiesAction.get_cities(response.data));
      })
      .catch((error) => {
        console.error('Error al cargar las ciudades:', error);
      });
  }, [dispatch]);

  const handleInputChange = (e) => {
    const valor = e.target.value;
    setFilter(valor);
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center">
      <Form className="d-flex justify-content-center align-items-center" style={{ marginTop: '50px' }}>
        <Row>
          <Col xs="auto">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Search the city"
              onChange={handleInputChange}
              ref={inputSearch}
            />
          </Col>
          <Col xs="auto">
            <Button className="btn btn-outline-light submit mx-4" style={{ backgroundColor: '#210062' }}>Submit</Button>
          </Col>
        </Row>
      </Form>
      <Row style={{ width: '1350px' }}>
        <font size='6' color="indigo">Cities</font>
        <h4>Collection of the most beautiful places and experiences</h4>
        {cities.length > 0 ? (
          cities
            .filter((cityData) =>
              String(cityData.city).toLowerCase().includes(filter.toLowerCase())
            )
            .map((data) => (
              <Col style={{ padding: '5px' }} key={data._id} md={3}>
                <CardComponent src={data.urlimage} city={data.city} country={data.country} id={data._id} />
              </Col>
            ))
        ) : (
          <h2 className="text-center" style={{ marginTop: '250px' }}>At the moment there are no results</h2>
        )}
      </Row>
    </Container>
  )
}

export default Cities;

