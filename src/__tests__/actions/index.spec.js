import {
  addPets,
  filterGender,
  filterSize,
  filterPets,
} from '../../actions/index';

const pets = [
  {
    id: 1,
    type: 'Dog',
    name: 'Charlie',
    gender: 'Male',
  },
  {
    id: 2,
    type: 'Dog',
    name: 'Charl',
    gender: 'Male',
  },
];
test('should return addPets action', () => {
  const action = addPets(pets);
  expect(action).toEqual({
    type: 'ADD_PETS',
    payload: {
      pets,
    },
  });
});

test('should return filterPets action', () => {
  const breed = 'Dog';
  const action = filterPets(breed);
  expect(action).toEqual({
    type: 'FILTER_PETS',
    payload: {
      breed,
    },
  });
});

test('should return filterSize action', () => {
  const size = 'Small';
  const action = filterSize(size);
  expect(action).toEqual({
    type: 'FILTER_SIZE',
    payload: {
      size,
    },
  });
});

test('should return filterGender action', () => {
  const gender = 'Male';
  const action = filterGender(gender);
  expect(action).toEqual({
    type: 'FILTER_GENDER',
    payload: {
      gender,
    },
  });
});
