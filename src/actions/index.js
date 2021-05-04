export const ADD_PETS = 'ADD_PETS';
export const FILTER_PETS = 'FILTER_PETS';
export const FILTER_SIZE = 'FILTER_SIZE';
export const FILTER_GENDER = 'FILTER_GENDER';

export const filterPets = (breed) => ({
  type: FILTER_PETS,
  payload: {
    breed,
  },
});

export const filterSize = (size) => ({
  type: FILTER_SIZE,
  payload: {
    size,
  },
});

export const filterGender = (gender) => ({
  type: FILTER_GENDER,
  payload: {
    gender,
  },
});

export const addPets = (pets) => ({
  type: ADD_PETS,
  payload: {
    pets,
  },
});

/* eslint-disable */
export const fetchPets = (animals) => {
  return (dispatch) => {
    return dispatch(addPets(animals));
  };
};
