import { combineReducers } from 'redux';
import { createSelector } from 'reselect';// es para el cache
import { cities, getForecastDataFromCities as _getForecastDataFromCities } from './cities';
import { city } from './city';


export default combineReducers({ 
    cities,
     city 
});


export const getCity = createSelector(state => state.city, city => city);

export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);