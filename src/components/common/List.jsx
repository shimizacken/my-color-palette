import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ colors, removeItem }) => (
  <div>
    {colors.map(item => (
      <ListItem
        key={item.id}
        itemId={item.id}
        itemText={item.name}
        removeItem={removeItem}
      />
    ))}
  </div>
);
