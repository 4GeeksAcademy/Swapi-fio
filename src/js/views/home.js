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
    const fetchCharacters = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/people");
        const data = await res.json();
        setCharacters(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/planets");
        const data = await res.json();
        setPlanets(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/vehicles");
        const data = await res.json();
        setVehicles(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div className="text-center mb-3 " style={{ color: "#FF1493" }}>
      <h1
        className="title"
        style={{ "font-family": "Star Wars", textShadow: "1px 1px 0 #fff" }}
      >
        CHARACTERS <i class="fa-solid fa-user-astronaut"></i>
      </h1>
      <div className="d-flex flex-nowrap overflow-auto px-3">
        {characters.map((item) => (
          <div className="mx-2" key={item.uid}>
            <CharactersCard
              name={item.name}
              uid={item.uid}
              style={{ width: "250px", height: "350px" }}
            />
          </div>
        ))}
      </div>

      <h1
        className="title mt-2"
        style={{ "font-family": "Star Wars", textShadow: "1px 1px 0 #fff" }}
      >
        PLANETS <i class="fa-solid fa-globe"></i>
      </h1>
      <div className="d-flex flex-nowrap overflow-auto px-3">
        {planets.map((item) => (
          <div className="mx-2" key={item.uid}>
            <PlanetsCard
              name={item.name}
              uid={item.uid}
              style={{ width: "250px", height: "350px" }}
            />
          </div>
        ))}
      </div>

      <h1
        className="title mt-2"
        style={{ "font-family": "Star Wars", textShadow: "1px 1px 0 #fff" }}
      >
        VEHiCLES <i class="fa-solid fa-shuttle-space"></i>
      </h1>
      <div className="d-flex flex-nowrap overflow-auto px-3">
        {vehicles.map((item) => (
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
