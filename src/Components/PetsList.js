import React from "react";
import Pet from "./Pet";
import PropTypes from "prop-types";

const PetsList = ({ pets }) => {
  return (
    <div className="pets__wrapper">
      {pets.length === 0 ? (
        <h1 className="loading__wrapper">Not pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet id={pet.id} name={pet.name} key={pet.id} media={pet.photos} />
        ))
      )}
    </div>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array,
};

export default PetsList;
