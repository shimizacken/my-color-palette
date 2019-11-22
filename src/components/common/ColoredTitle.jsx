import React from "react";

export const ColoredTitle = React.memo(({ text }) => {
  const colors = ["blue", "red", "yellow", "green", "pink", "orange"];
  console.log(text);

  return (
    <h1>
      {text &&
        [...text].map((letter, index) => (
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
