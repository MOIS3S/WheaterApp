import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './style.css';

// hacemos el destructuring directamente en la funcion
const WeatherData = ({ data: {temperature, weatherState, humidity, wind} }) => (

    // tambien se puede hacer asi
    //const { temperature, weatherState, humidity, wind } = data;

    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={temperature}
            weatherState={weatherState}
         />
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
);

// validams los datos que estan pasando al comonente
WeatherData.propTypes = {
    // La variable que vamos a validar es data y tiene que tener la siguien estructura
    data: PropTypes.shape({
        // esto significa que tiene que ser numerica y no puede estar vacia o nulla
        temperature: PropTypes.number.isRequired,
        // esto significa que tiene que ser string y no puede estar vacia o nulla 
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherData;