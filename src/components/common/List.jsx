import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ colors, removeItem }) => (
  <div>
    {colors.map(item => (
      <ListItem key={item} color={item} removeItem={removeItem} />
    ))}
  </div>
);
