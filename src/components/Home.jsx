import React, { useState, useEffect } from "react";

import { AiOutlineSearch } from "react-icons/Ai";
import "./Home.css";

function Home() {
  const [input, setinput] = useState("");
  const [selectRegion, setSelectRegion] = useState("");
  const [Data, setData] = useState([]);

  const urlCountry = `https://restcountries.com/v3.1/name/${input}`;
  const urlRegion = `https://restcountries.com/v3.1/region/${selectRegion}`;

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (response.status === 404) {
        throw new Error(`Not found`);
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData(urlCountry);
  }, [urlCountry]);

  useEffect(() => {
    fetchData(urlRegion);
  }, [urlRegion]);

  // console.log(country[0]?.country?.flags.png)
  {Data.map((data,i)=>console.log(data))}
  return (
    <div className="Home">
      <div>
        <div className="Input">
          <div className="Input--left">
            <AiOutlineSearch />
            <input
              type="search"
              name=""
              id=""
              value={input}
              placeholder="search for a contry"
              onChange={(e) => setinput(e.target.value)}
            />
          </div>
          <div>
            <select
              name=""
              id="Select--button"
              value={selectRegion}
              onChange={(e) => setSelectRegion(e.target.value)}
            >
              <option value="All">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className="Country--container">
        {Data &&
          Data.map((country, index) => (
            <div className="Country--item" key={index}>
              <img className="Country--image" src={`${country?.flags.png}`} alt="image--not found" />
              <p>{country?.capital[index]}</p>
              <p>{country?.population}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
