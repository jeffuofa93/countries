import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [weather, setWeather] = useState([]);
  const [capitalCity, setCapitalCity] = useState("Helsinki");
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capitalCity}`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      });
  }, [capitalCity]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };
  const handleCountryChange = (capital) => setCapitalCity(capital);
  const countriesToShow = countries.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <input value={newFilter} onChange={handleFilterChange} />
      <Countries
        countries={countriesToShow}
        newFilter={newFilter}
        setNewFilter={setNewFilter}
        weather={weather}
        handleCountryChange={handleCountryChange}
      />
    </div>
  );
};

export default App;
