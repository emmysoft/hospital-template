import React from "react";
import { Wrapper } from "./HeroStyle";

import { Button } from "../../components/Button";
import { button } from "../../components/Navigation/Nav";

function Hero() {
  return (
    <>
      <Wrapper>
        <h3 className="hero-text">
          <span className="span">Health Care</span> <br />
          <p className="mini-span">For the whole family</p>
        </h3>
        <p className="hero-para">
          Our hospital offers the best services in the world. Excellence is the
          service of the hospital to its wonderful patients
        </p>
        <Button to="/" style={button}>
          Check our Services
        </Button>
      </Wrapper>
    </>
  );
}

export default Hero;
