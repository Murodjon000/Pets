import React, { Component } from "react";
import PropTypes from "prop-types";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url || "/",
        name: animal.name || "Name was not Given.",
        animal: animal.type || "Type was not given",
        location: `${animal.contact.address.city},${animal.contact.address.state}`,
        breed: animal.breeds.primary || "Breed was not given",
        media: animal.photos || [],
        description: animal.description || "Info was not Given.",
        loading: false,
      });
    });
  }

  adopt = () => navigate(this.state.url);
  home = () => navigate("/");

  render() {
    if (this.state.loading) {
      return <h1 className="loading__wrapper"  data-testid="details-loading">Loading....</h1>;
    }
    const { name, breed, animal, location, description, media } = this.state;
    let hero = "http://placecorgi.com/300/300";

    if (media.length != 0) {
      hero = media[0].large;
    }

    return (
      <div className="pets__details-wrapper">
        <div className="pets__details-wrapper-image">
          <img src={hero} alt="" />
        </div>
        <div className="pets__details-wrapper-box">
          <h1>{name}</h1>
          <h3>🏡{location}</h3>
          <h4>
            {animal}⭐{breed}
          </h4>
          <h2>Meet {name}🎉</h2>
          <p>👀{description}</p>
          <button onClick={this.adopt}>Adopt me</button>
          <button onClick={this.home}>Back to home</button>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  id: PropTypes.any,
};

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
