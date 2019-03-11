import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';
import './style.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers",
};

// Funcion para manejar los iconos 
const getWeatherIcon = weatherState => {
    // con destructurin guardamos la varible del icono
    const icon = icons[weatherState];
    const sizeIcon = "4x";

    // verificamos si encontro algun icono
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    // si no encontro ningun icono devolvemos uno por defecto
    else
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />;   
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{ `${temperature}`}</span>
        <span className="temperatureType">{ ` C°`}</span>
    </div>
);

// validando que los datos pasados al componente sean adecuados
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;