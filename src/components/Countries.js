import React from "react";
import Country from "./Country";

const Countries = ({
  countries,
  newFilter,
  setNewFilter,
  weather,
  handleCountryChange,
}) => {
  if (!newFilter || (countries.length < 10 && countries.length > 1)) {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.alpha2Code}>
            {country.name}
            <button onClick={() => setNewFilter(country.name)}>show</button>
          </div>
        ))}
      </div>
    );
  }
  if (countries.length > 10 || countries.length === 0) {
    return (
      <div>
        {countries.length > 10
          ? "Too many matches, specify another filter"
          : "No matches, specify another filter"}
      </div>
    );
  }

  if (countries.length === 1) {
    return (
      <div>
        <Country
          country={countries[0]}
          weather={weather}
          handleCountryChange={handleCountryChange}
        />
      </div>
    );
  }
};

export default Countries;
