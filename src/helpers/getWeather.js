import axios from 'axios';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

export const getWeather = async(zone = 'tucuman') => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: { q: zone, days: '3' },
        headers: {
            'X-RapidAPI-Key': '9f181d525cmsh2362f587f1856e2p1e2df6jsn2bde18f329ce',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const { location } = response.data
        const { current } = response.data
        const weatherDays = response.data.forecast.forecastday

        const weather = {
            today: {
                city: location.name,
                country: location.country,
                date: getDay(location.localtime),
                humidity: current.humidity,
                text: current.condition.text,
                icon: current.condition.icon,
                temp: current.feelslike_c,
                max: weatherDays[0].day.maxtemp_c,
                min: weatherDays[0].day.mintemp_c,
            },

            tomorrow: {
                date: getDay(weatherDays[1].date),
                icon: weatherDays[1].day.condition.icon,
                temp: weatherDays[1].day.avgtemp_c,
                max: weatherDays[1].day.maxtemp_c.toFixed(0),
                min: weatherDays[1].day.mintemp_c.toFixed(0),
            },
            afterTomorrow: {
                date: getDay(weatherDays[2].date),
                icon: weatherDays[2].day.condition.icon,
                temp: weatherDays[2].day.avgtemp_c,
                max: weatherDays[2].day.maxtemp_c.toFixed(0),
                min: weatherDays[2].day.mintemp_c.toFixed(0),
            },


        }

        return weather;

    } catch (error) {
        console.error("Error al traer datos del clima", error);

    }
}


const getDay = (date) => {
    if (!date.includes(' ')) {
        date += ' 00:00';
    }
    const result = format(parse(date, 'yyyy-MM-dd HH:mm', new Date()), 'EEEE', { locale: es });
    return result;
}