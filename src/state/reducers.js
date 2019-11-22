import { ADD_COLOR } from "./constants";

export const colors = (state = ["red", "green", "pink"], action) => {
  if (action.type === ADD_COLOR) {
    return [...state, action.color];
  }

  return state;
};

export const users = (state = ["Leo", "Jan Erik", "Jon Vegard"], action) =>
  state;
