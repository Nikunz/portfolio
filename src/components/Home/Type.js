import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DevOps Engineer",
          "Application support specialist",
          "AWS cloud",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 65,
      }}
    />
  );
}

export default Type;
