import React, { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";
// import useDropdown from "./UseDropdown";

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [Animals, setAnimals] = useState([]);
  const [breeds, setBreeds] = useState([]);
  // const [animal, AnimalDropdown] = useDropdown("Animal", "dog", Animals);
  // const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [animal, updateAnimal] = useState("dog");
  const [breed, updateBreed] = useState("");

  useEffect(() => {
    setBreeds([]);
    updateBreed("");

    client.animalData.breeds(animal).then(resp => {
      let breeds = resp.data.breeds;
      setBreeds(breeds);
    });

    client.animalData.types().then(resp => {
      let Animals = resp.data.types.map(type => type.name);
      setAnimals(Animals);
    });
  }, [animal, updateBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => updateAnimal(e.target.value)}
            onBlur={e => updateAnimal(e.target.value)}
          >
            <option />
            {Animals.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={e => updateBreed(e.target.value)}
            onBlur={e => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map(breed => (
              <option key={breed.name} value={breed.name}>
                {breed.name}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
