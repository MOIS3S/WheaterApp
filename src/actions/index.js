import { api_key, url_base_weather_forecast} from './../constants/api_urls';
import transformWeather from './../services/transformWeather';
import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity  from './../services/getUrlWeatherByCity'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

// busca los datos en la api
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
// guarda los datos en el estado general de la aplicacion
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';


//redux actionCreate
const setCity = payload => ({type: SET_CITY,  payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

// redus actionCreate setWeather
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});

const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});


// action fech de datos forescast

export const setSelectedCity = payload => {
    return dispach => {
        const url_forecast = `${url_base_weather_forecast}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador de busqueda
        dispach(setCity(payload))

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData)

                //modificar el estado con el resultado de la promise (fech)
                dispach(setForecastData({city: payload, forecastData}))
            }
        );
    };
};

export const setWeather = payload => {
    return dispach => {

    payload.forEach(city => {
        
        // disparamos el actionCreate 
        dispach(getWeatherCity(city) );

        const api_weather = getUrlWeatherByCity(city);
    
        fetch(api_weather).then( response => {
            return response.json();
            }).then(weather_data => {
            const weather = transformWeather(weather_data);

            dispach(setWeatherCity({city, weather}))
            });
        })
    }
}