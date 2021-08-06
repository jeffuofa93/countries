import React, { useEffect } from "react";

const Country = ({
  country: { capital, population, languages, flag, name },
  weather,
  handleCountryChange,
}) => {
  useEffect(() => {
    handleCountryChange(capital);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <h4>Languages</h4>
      <ul>
        {languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <img src={flag} alt="flag" />
      <Weather capital={capital} weather={weather} />
    </div>
  );
};

const Weather = ({ capital, weather }) => {
  return (
    <div>
      <h4>Weather in {capital}</h4>
      <div>
        <b>temperature: </b>
        {weather.current.temperature} Celsius
      </div>
      <div>
        <img src={weather.current.weather_icons[0]} alt="Weather icon" />
      </div>
      <div>
        <b>wind: </b>
        {weather.current.wind_speed} mph direction {weather.current.wind_dir}
      </div>
    </div>
  );
};

export default Country;
