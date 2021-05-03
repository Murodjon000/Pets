import { combineReducers } from "redux";
import pets from "./pet";
import filter from "./filter";
console.log(filter.breed);
export default combineReducers({
  pets,
  filter,
});
