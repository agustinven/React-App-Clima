import React from "react";

const WeatherINfo = props => {
  console.log(props);
  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}

      {
        props.temperature ?

          <div className="card card-body">
            <p>
              Location: {props.city}, {props.country}
            </p>
            <p>
              Temperature: {props.temperature} ºC, {props.description}
            </p>
            <p>Humidity: {props.humidity}</p>
            <p>Wind Spedd: {props.wind_speed}</p>
          </div>
          :
          <div className="card card-body">
            <p>Not Request Yet</p>
          </div>
      }
    </div>
  );
};

export default WeatherINfo;
