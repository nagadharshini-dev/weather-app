import React, { useState } from "react";
import Axios  from "axios";
import { WeatherIcons } from "./WeatherIcons";
import WeatherComponent from "./components/WeatherComponent";
import CityComponent from "./components/CityComponent";

import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [error,setError]=useState("")

  const fetchWeather = async (e) => {
    e.preventDefault();
    const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

    try{
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`,
    );
    updateWeather(response.data);
    setError("")
  }

  catch(err){
    setError("Error fetching the weather data please provide a correct city name")
  }
  };
  return (
    <Container className="mt-5">
      <h3 className="text-center">Weather App</h3>
      {city && weather ? <WeatherComponent weather={weather} city={city} />
       : <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />}


        {error && (
          <Modal show={true} onHide={()=>setError("")}>
          <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{error}</Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={() => setError("")}>Close</Button>
          </Modal.Footer>
          </Modal>
        )}
    </Container>
  );
}

export default App;
