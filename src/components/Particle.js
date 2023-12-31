import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 0,
            density: {
              enable: false,
              value_area: 400,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.08,
          },
          move: {
            direction: "right",
            speed: 0.2,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: false,
              speed: 3,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}

export default Particle;
