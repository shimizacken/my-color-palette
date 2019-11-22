import { ADD_COLOR, REMOVE_COLOR } from "./constants";

export const addColor = color => ({
  type: ADD_COLOR,
  color
});

export const removeColor = colorId => ({
  type: REMOVE_COLOR,
  colorId
});
