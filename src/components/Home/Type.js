import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Engineering Student",
          "Machine Learning",
          "React Developer",
          "Flask and Django",
          "CNN, RNN, NLP",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
