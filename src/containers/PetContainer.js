import { connect } from 'react-redux';
import {
  fetchPets,
  filterPets,
  filterSize,
  filterGender,
} from '../actions/index';
import SearchPets from '../Components/SearchPets';

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

const getFilteredPets = (pets, filter) => {
  if (filter.breed === 'All') {
    return pets;
  }

  if (filter.gender === 'Male') {
    return pets.filter((pet) => pet.gender === filter.gender);
  }
  if (filter.gender === 'Female') {
    return pets.filter((pet) => pet.gender === filter.gender);
  }

  return pets.filter(
    (pet) => pet.species === capitalize(filter.breed || 'All')
      || pet.size === filter.size,
  );
};

const mapStateToProps = (state) => ({
  pets: getFilteredPets(state.pets, state.filter),
  filter: state.filter.breed,
  size: state.filter.size,
  gender: state.filter.gender,
});

const mapStateToDispatch = (dispatch) => ({
  fetchPets: (animals) => dispatch(fetchPets(animals)),
  filterPets: (breed) => dispatch(filterPets(breed)),
  filterSize: (size) => dispatch(filterSize(size)),
  filterGender: (gender) => dispatch(filterGender(gender)),
});

export default connect(mapStateToProps, mapStateToDispatch)(SearchPets);
