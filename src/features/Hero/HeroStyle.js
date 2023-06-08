import styled, { keyframes } from "styled-components";
import { Colors } from "../../constant";
import doctor from "../../assets/doctor.jpg";

const slide = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
  `;

const slideOut = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%)
    }
  `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  background-image: url(${doctor});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 12.5rem;

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.05rem;
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    animation: ${slide} 2s;
    color: ${Colors.darkColor};

    .span {
      font-weight: bold;
      font-size: 4.5rem;
    }
    .mini-span {
      font-weight: lighter;
      font-size: 4.5rem;
      height: 60%;
    }
  }
  .hero-para {
    font-weight: 300;
    font-size: 1rem;
    color: ${Colors.greyColor};
    animation: ${slideOut} 2s;
    width: 38.7rem;
    height: 7.5rem;
  }
  .button {
    background-color: linear-gradient(
      45deg,
      ${Colors.primaryColor},
      ${Colors.universalColor},
      ${Colors.universeColor}
    );
    animation: ${slideOut} 2s;
  }
`;
