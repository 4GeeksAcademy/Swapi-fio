import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { VehiclesCard } from "../component/vehicleCards";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => setPlanets(data.results))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then(res => res.json())
      .then(data => setVehicles(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="text-center mt-3 text-warning">
      <h1>CHARACTERS 👩‍🚀</h1>
      <div className="d-flex justify-content-center overflow-auto">
        {characters.map((item, index) => (
          <div className="mx-2" key={item.uid}>
            <CharactersCard
              name={item.name}
              uid={item.uid}
              style={{ width: "250px", height: "350px" }}  
            />
          </div>
        ))}
      </div>

      <h1>PLANETS 🪐</h1>
      <div className="d-flex justify-content-center overflow-auto">
        {planets.map((item, index) => (
          <div className="mx-2" key={item.uid}>
            <PlanetsCard
              name={item.name}
              uid={item.uid}
              style={{ width: "250px", height: "350px" }}  
            />
          </div>
        ))}
      </div>

      <h1>VEHICLES 🚀</h1>
      <div className="d-flex justify-content-center overflow-auto">
        {vehicles.map((item, index) => (
          <div className="mx-2" key={item.uid}>
            <VehiclesCard
              name={item.name}
              uid={item.uid}
              style={{ width: "250px", height: "350px" }}  
            />
          </div>
        ))}
      </div>
    </div>
  );
};

