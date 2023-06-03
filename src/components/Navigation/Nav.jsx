import React from "react";
import { Wrapper } from "./NavStyle.js";
import { NavLink } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGooglePlusG,
  FaPhone,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import logo from "../../assets/logo.jpg";
import { Colors } from "../../constant";
import { Button } from "../Button/index.jsx";

function Nav() {
  return (
    <>
      <Wrapper>
        <div className="media">
          <div className="social-media">
            <NavLink to="/">
              <FaLinkedinIn style={mediaStyles} />
            </NavLink>
            <NavLink to="/">
              <FaFacebookF style={mediaStyles} />
            </NavLink>
            <NavLink to="/">
              <FaGooglePlusG style={mediaStyles} />
            </NavLink>
          </div>
          <div className="contact-media">
            <NavLink to="/" style={contact}>
              <AiOutlineMail style={contactStyle} />
              <NavLink to="/" className="nav-link">
                info@hospital.com
              </NavLink>
            </NavLink>
            <NavLink to="/" style={contact}>
              <FaPhone style={contactStyle} />
              <NavLink to="/" className="nav-link">
                009988776611
              </NavLink>
            </NavLink>
          </div>
        </div>
        <div className="nav">
          <div className="logo-area">
            <NavLink to="/">
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/" className="nav-link">
              Department
            </NavLink>
            <NavLink to="/" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="/" className="nav-link">
              Pages
            </NavLink>
            <NavLink to="/" className="nav-link">
              Doctors
            </NavLink>
            <NavLink to="/" className="nav-link">
              Contact
            </NavLink>
          </div>
          <div className="nav-btn">
            <Button to="/" style={button}>
              Book an Appointment
            </Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Nav;

export const mediaStyles = {
  color: Colors.tertiaryColor,
};

export const contact = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
};
export const contactStyle = {
  color: Colors.universalColor,
};

export const button = {
  padding: "1.25rem",
  color: Colors.universeColor,
  backgroundColor: Colors.universalColor,
  borderRadius: "0.5rem",
  textDecoration: "none",
};
