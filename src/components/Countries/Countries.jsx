import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import "./Countries.css";
// import Country from "../Country/country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Countries :{countries.length}</h3>
      <div className="country-container">
        {
          countries.map((country) => (
            <Country key={country.cca3} country={country}></Country>
          ))
          // countries.map(country => <Country key={country.ccs3} country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;
