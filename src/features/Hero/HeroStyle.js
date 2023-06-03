import styled from "styled-components";
import { Colors } from "../../constant";
import doctor from "../../assets/doctor.jpg";

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
    width: 38.7rem;
    height: 7.5rem;
  }
`;
