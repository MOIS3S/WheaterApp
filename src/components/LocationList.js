import React from 'react';
import WeatherLocation from './WeatherLocation';
import { PropTypes } from 'prop-types';
import './styles.css';


const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        //console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        // itera sobre la lista y devuelve el valor despues creamos otra funcion que cre el componenete con el valor de city
        // le pasamos como key la city para que tenga un identificador unico
        cities.map( city => 
            (
                <WeatherLocation 
                key={city.key} 
                city={city.name}
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                data={cities.data}/>))
    );
    
    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>);
};

LocationList.prototype = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;