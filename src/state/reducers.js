import { ADD_COLOR, REMOVE_COLOR } from "./constants";
import uuid from "uuid";

const initialState = [
  { id: uuid.v4(), name: "red", createDate: new Date().getTime() },
  { id: uuid.v4(), name: "green", createDate: new Date().getTime() },
  { id: uuid.v4(), name: "pink", createDate: new Date().getTime() }
];

export const colors = (state = initialState, action) => {
  if (action.type === ADD_COLOR) {
    return [...state, action.color];
  }

  if (action.type === REMOVE_COLOR) {
    return state.filter(c => c.id !== action.colorId);
  }

  return state;
};

export const users = (state = ["Leo", "Jan Erik", "Jon Vegard"], action) =>
  state;
