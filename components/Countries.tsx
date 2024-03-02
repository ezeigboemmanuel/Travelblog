import React from "react";
import Maldives from "../public/assets/maldives.jpg"
import Paris from "../public/assets/paris.jpg"
import Tokyo from "../public/assets/tokyo.jpg"

const Countries = () => {
  const countries = [
    {
      name: "Maldives",
      image: Maldives,
      readers: 150000000,
    },
    {
      name: "Paris",
      image: Paris,
      readers: 40000000, 
    },
    {
      name: "Tokyo",
      image: Tokyo,
      readers: 60000000,
    },
  ];
  return(
    <div>
      {countries.map(country => <p>{country.name}</p>)}
    </div>
  );
};

export default Countries;
