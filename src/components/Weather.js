import React from 'react';

const api = "65125f4adb812bcb9937ba4b637de4b7";
const url = "http://api.openweathermap.org/data/2.5/weather?q=Chicago,us&appid=" + api;

const weatherObj = JSON.parse(localStorage.getItem('weather'));
class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            temp: '',
            weatherDesc: '',
        }
    }

    fetchWeather = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            const temp = this.convertToFahrenheit(json.main.temp) + 'º';
            const weatherDesc = this.formatDesc(json.weather[0].description);
            const location = json.name;
            this.setState({location, temp, weatherDesc});
            // localStorage.setItem('weather', this.state);
        });
    }

    convertToFahrenheit = temp => {
        return Math.floor((temp - 273.15) * 9 / 5 + 32);
    }
    
    formatDesc = desc => {
        return desc.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    }

    componentDidMount() {
        if (!weatherObj) {
           this.fetchWeather();
        } else {
            this.setState(weatherObj);
        }
    }

    render() {
        return (
            <div id="weather-div">
                <h2 id="weather-temp">{this.state.temp}</h2>
                <h3 id="weather-location">{this.state.location}</h3>
                <h4 id="weather-desc">{this.state.weatherDesc}</h4>
            </div>
        )
}
    }


export default Weather;