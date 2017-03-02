var React = require('react');


var WeatherMessage = ({temp,location,humidity}) =>{
    return(
      <div>
        <h3>It is {temp} degree in {location} and humidity is {humidity}</h3>
      </div>
    )
}

module.exports = WeatherMessage;
