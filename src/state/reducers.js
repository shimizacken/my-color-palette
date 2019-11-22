import { ADD_COLOR, REMOVE_COLOR } from "./constants";

export const colors = (state = ["red", "green", "pink"], action) => {
  if (action.type === ADD_COLOR) {
    return [...state, action.color];
  }

  if (action.type === REMOVE_COLOR) {
    return state.filter(c => c !== action.color);
  }

  return state;
};

export const users = (state = ["Leo", "Jan Erik", "Jon Vegard"], action) =>
  state;
