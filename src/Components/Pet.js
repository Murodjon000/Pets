import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Pet = ({ id, name, media }) => {
  let hero = "http://placecorgi.com/300/300";

  if (media.length != 0) {
    hero = media[0].medium;
  }

  return (
    <Link to={`/details/${id}`}>
      <div className="pets__card">
        <div className="pets__card-box">
          <img src={hero} alt="" />
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};

Pet.propTypes = {
  name: PropTypes.string,
  media: PropTypes.array,
  id: PropTypes.number,
};

export default Pet;
