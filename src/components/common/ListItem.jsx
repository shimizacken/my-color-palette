import React from "react";
import { Button } from "./Button";

export const ListItem = ({ itemText, itemId, removeItem }) => {
  const click = () => {
    removeItem(itemId);
  };

  return (
    <div>
      {itemText}
      <Button text="X" onClick={click} />
    </div>
  );
};
