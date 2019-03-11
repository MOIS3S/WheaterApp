import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

class ForecastItem extends Component {

    render() {

        const { weekDay, hour, data } = this.props;

        return (
            <div>
                <div>{ weekDay } - { hour }</div>
                <WeatherData data={data}></WeatherData>
            </div>

        );
    }
}


ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequerid,
    hour: PropTypes.number.isRequerid,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired, 
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default ForecastItem;