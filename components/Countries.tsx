import React from "react";
import Maldives from "../public/assets/maldives.jpg";
import Paris from "../public/assets/paris.jpg";
import Tokyo from "../public/assets/tokyo.jpg";
import Image from "next/image";
import millify from "millify";
import MapImg from "../public/assets/map.jpg"

const Countries = () => {
  const countries = [
    {
      name: "Maldives",
      image: Maldives,
      readers: 1500,
    },
    {
      name: "Paris",
      image: Paris,
      readers: 1200,
    },
    {
      name: "Tokyo",
      image: Tokyo,
      readers: 6200,
    },
  ];
  return (
    <div className="flex flex-row justify-center gap-x-2 lg:gap-x-10 md:gap-x-4 mx-auto">
      {countries.map((country) => (
        <div key={country.name} className="flex  flex-col border overflow-hidden bg-black items-center pb-4">
          <Image
            src={country.image}
            alt="country_img"
            className="h-28 w-28 md:h-40 md:w-40"
          />
          <Image
            src={MapImg}
            alt="map_img"
            className="h-20 w-28 md:h-28 md:w-40 brightness-50 grayscale"
          />
          <p className="text-white text-[12px] font-semibold">{country.name}</p>
          <p className="text-[#E7493F] text-[10px]">{millify(country.readers) + " READERS"}</p>
          <button className="w-24 md:w-32 text-[10px] bg-tranparent text-white py-2 px-4 border border-[#fff] hover:border-transparent">
            EXPLORE NOW
          </button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
