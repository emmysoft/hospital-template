import React from "react";
import { Wrapper } from "./BodyStyle";
import { TransParentButton } from "../../components/Button";
import { FaHospital, FaPhone, FaFirstAid } from "react-icons/fa";
import { Colors } from "../../constant";

function Body() {
  return (
    <>
      <Wrapper>
        <div className="hospitality">
          <FaHospital style={iconStyle} />
          <h5 className="head_1">Hospitality</h5>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quo!
          </p>
          <TransParentButton to="/" style={transBtn}>
            Apply for Bed
          </TransParentButton>
        </div>
        <div className="emergency">
          <FaPhone style={iconStyle} />
          <h5 className="head_2">Emergency Care</h5>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quo!
          </p>
          <TransParentButton to="/" style={transBtn}>
            +9073225461
          </TransParentButton>
        </div>
        <div className="chamber">
          <FaFirstAid style={iconStyle} />
          <h5 className="head_3">Chamber Service</h5>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quo!
          </p>
          <TransParentButton to="/" style={transBtn}>
            Book an Appointment
          </TransParentButton>
        </div>
      </Wrapper>
    </>
  );
}

export default Body;

export const transBtn = {
  border: "2px solid #fff",
  padding: "1.2rem",
  textAlign: "center",
  color: Colors.universeColor,
  borderRadius: "6px",
  textDecoration: "none",
};

export const iconStyle = {
  color: Colors.universeColor,
};
