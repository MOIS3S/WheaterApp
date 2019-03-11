import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

import './styles.css'


const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour} 
            data={forecast.data}></ForecastItem>));
}

const renderProgress = () => {
    return <h3>Cargando pronostico extendido...</h3>
}

const ForecastExtended = ({city, forecastData}) => (
    <div>
        <h2 className='forecast-title'>Pronostico extenido: {city}</h2>
        { forecastData ?
        renderForecastItemDays(forecastData) :
        renderProgress() 
        }
    </div>
         
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;




/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import { api_key, url_base_weather_forecast} from './../constants/api_urls';
// funcion para transformar los datos de la api a un formato utilizable para el render
import transformForecast from './../services/transformForecast';
import './styles.css'

class ForecastExtended extends Component {

    constructor() {
        super();

        this.state = { forecastData: null }
    }

    // esta funcion de ejecuda cuando el componen ya hizo el render
    componentDidMount() {
        this.updateCity(this.props.city);   
    }

    // esta funcion se ejecuta cada vez que se actualiza alguna de las propiedades del componente
    componentWillReceiveProps(nextProps) {
        // verificamos si la ciudad pasada en nextPorps es igual a la que ya esta establecida si no es actualizamos la ciudad
        if(nextProps.city !== this.props.city) {
            // con esto logramos ver el indicador de cargar
            this.setState({ forecastData: null})
            // actualizamos el la nueva ciudad
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url_base_weather_forecast}?q=${city}&appid=${api_key}`;

        // fech le pasas la url de donde vas a buscar los datos y te devuelve una promise y se ejecuta con then
        fetch(url_forecast).then(
            // creamos una funcion con arrow function con la data que trajimos de fech y lo covertivos en un objeto json
            data => (data.json())
        // cuando devuelva el objecto json ecadenamos la promise otra con then
        ).then(
            weather_data => {
                console.log(weather_data)
                // transformamos los datos de weather_data
                const forecastData = transformForecast(weather_data);
                // actualizamos el state con destructuring
                console.log(forecastData)
                this.setState({ forecastData })
            }
        );
    }
    

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour} 
                data={forecast.data}></ForecastItem>));
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>
    }

    render() {
        const {city} = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='forecast-title'>Pronostico extenido: {city}</h2>
                { forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress() 
                }
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;*/