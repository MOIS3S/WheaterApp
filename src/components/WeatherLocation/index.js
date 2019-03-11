import React from 'react';
import CircularProgregress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
// se usan las llaves cuando al exportar no se utiliza la palabra "default"
import Location from './Location';
import WeatherData from './WeatherData';
import "./styles.css";
//import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';


/*componentDidMount() {
    //console.log("componentDidMount")
    this.handleUpdateClick();
}

componentDidUpdate(prevProps, prevState) {
    //console.log("componentDidUpdate");
} 

handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    
    // fech toma la url y devuelve una promise
    fetch(api_weather).then( response => {
        // retornamos los datos de la promise en json que tambien es una promise
        return response.json();
    // ejecutamos la promise.json se puede hacer asi
    }).then(data => {
        // asignamos a newWeather los datos nuevo del api
        const newWeather = transformWeather(data);

        // actualizamos el stado del componente
        this.setState({
            data: newWeather,
        });
    });
    // para actualizar completo o parcialmente el state tenemos que invocar la funcion setState
    
}*/

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
        <Location city={city}></Location>
        { data ? 
            <WeatherData data={data}></WeatherData> : 
                <CircularProgregress size={50}/>
        }
    </div>
        );
        
    WeatherLocation.propTypes = {
        city: PropTypes.string.isRequired,
        onWeatherLocationClick: PropTypes.func,
        data: PropTypes.shape({
            // esto significa que tiene que ser numerica y no puede estar vacia o nulla
            temperature: PropTypes.number.isRequired,
            // esto significa que tiene que ser string y no puede estar vacia o nulla 
            weatherState: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            wind: PropTypes.string.isRequired,
        })
};

export default WeatherLocation;

/*class WeatherLocation  extends Component {

    // llamamos la funcion contructora y la super para declara el estado del compoente. props es para que acepte propiedades
    constructor(props) {
        // siempre hay que llamar la super funcion para que trabaje bien. props es para que acepte propiedades
        super(props);

        const { city } = props;

        this.state = {
            city,
            data: null,
        };
        //console.log("constructor")
    }

    componentDidMount() {
        //console.log("componentDidMount")
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate");
    } 
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        
        // fech toma la url y devuelve una promise
        fetch(api_weather).then( response => {
            // retornamos los datos de la promise en json que tambien es una promise
            return response.json();
        // ejecutamos la promise.json se puede hacer asi
        }).then(data => {
            // asignamos a newWeather los datos nuevo del api
            const newWeather = transformWeather(data);

            // actualizamos el stado del componente
            this.setState({
                data: newWeather,
            });
        });
        // para actualizar completo o parcialmente el state tenemos que invocar la funcion setState
        
    }

    render() {
        //console.log("render")
        // utilizando destructuring
        const { city, data } = this.state;

        const { onWeatherLocationClick } = this.props;

        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                { data ? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgregress size={50}/>
                }
            </div>
        );
    }
}
    WeatherLocation.propTypes = {
        city: PropTypes.string.isRequired,
        onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;*/