import React from "react";

export const ColoredTitle = React.memo(text => {
  if (!text) {
    return null;
  }

  const colors = ["blue", "red", "yellow", "green", "pink", "orange"];

  return (
    <h1>
      {[..."text"].map((letter, index) => (
        <span
          key={index}
          style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
});
