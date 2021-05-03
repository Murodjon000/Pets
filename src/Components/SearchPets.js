import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import pet, { ANIMALS } from "@frontendmasters/pet";
import PetsList from "./PetsList";

const SearchPets = ({
  pets = [],
  fetchPets,
  filterPets,
  filter,
  filterSize,
  size,
  gender,
  filterGender,
}) => {
  const [petSize, petSizeSet] = useState(size);
  const [petFilter, petFilterSet] = useState(filter);
  const [petGender, petGenderSet] = useState(gender);
  const [updatePets, setUpdatePets] = useState(pets || []);

  const sizes = ["Small", "Medium", "Large"];
  const genders = ["Male", "Female"];
  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase();

  async function petsRequest() {
    const { animals } = await pet.animals({
      type: petFilter,
      gender: petGender,
      size: petSize,
    });
    console.log(animals);
    fetchPets(animals);
    setUpdatePets(animals);
    filterPets(petFilter);
    filterSize(petSize);
    filterGender(petGender);
  }

  const onFilterChange = (e) => {
    const value = e.target.value;
    petFilterSet(value);
  };

  const onSizeChange = (e) => {
    const value = e.target.value;
    petSizeSet(value);
  };

  const onGenderChange = (e) => {
    const value = e.target.value;
    petGenderSet(value);
  };

  return (
    <div className="main__wrapper">
      <div className="search__form__wrapper">
        <form
          className="search__form__wrapper-form"
          onSubmit={(e) => {
            e.preventDefault();
            petsRequest();
          }}
        >
          <div className="search__form__wrapper-form-box">
            <label htmlFor="id-1">
              Animal
              <select value={petFilter} onChange={onFilterChange}>
                <option>All</option>
                {ANIMALS.map((option) => (
                  <option value={option} key={option}>
                    {capitalize(option)}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="id-2">
              Size
              <select value={petSize} onChange={onSizeChange}>
                <option>All</option>
                {sizes.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="id-3">
              Gender
              <select value={petGender} onChange={onGenderChange}>
                <option>All</option>
                {genders.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button>Find Pet</button>
        </form>
      </div>

      <PetsList pets={updatePets} />
    </div>
  );
};

SearchPets.propTypes = {
  pets: PropTypes.array,
  animals: PropTypes.string,
  fetchPets: PropTypes.func,
  filter: PropTypes.string,
  filterPets: PropTypes.func,
  filterSize: PropTypes.func,
  filterGender: PropTypes.func,
  size: PropTypes.string,
  gender: PropTypes.string,
};

export default SearchPets;
