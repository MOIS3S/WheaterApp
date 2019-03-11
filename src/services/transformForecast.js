import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecas = data => (
    // filter recorre los elemento los compara y devuelve una nueva lista
    data.list.filter(item => (
        // utilizamos moment.unix para covertir el dato unix luego convertirlo a utc despues a hora y filtrar solo
        // las horas 6, 12 y 18
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18 
    // la ista que nos devuelve le pasamos un map    
    )).map(item => ({
        // convertimos la fecha a un formato simple
        weekDay: moment.unix(item.dt).format('ddd'),
        // como la hora es un valor numerico lo dejamos asi
        hour: moment.unix(item.dt).hour(),
        data : transformWeather(item),
    }))
);


export default transformForecas;