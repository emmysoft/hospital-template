import styled from "styled-components";
import { Colors } from "../../constant";

// const rotateOut = keyframes`
//   from {
//     transform: rotate(360deg) translateX(0%);
//     opacity: 0;
//   }
//   to {
//     transform: rotate(0deg) translateX(0%);
//     opacity: 1;
//   }
// `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .hospitality {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    background-color: ${Colors.otherColor};
    padding: 1.25rem;
    &:hover {
      color: ${Colors.otherColor};
      transition: transform 0.2s;
      transform: scale(1.2);
    }

    .head_1 {
      width: 24px;
      color: ${Colors.universeColor};
      font-weight: 400;
      font-size: 20px;
    }
    .para {
      //   width: 30rem;
      //   height: 6.5rem;
      color: ${Colors.universeColor};
    }
  }

  .emergency {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    background-color: ${Colors.universalColor};
    padding: 1.25rem;
    &:hover {
      color: ${Colors.universalColor};
      transition: transform 0.2s;
      transform: scale(1.2);
    }

    .head_2 {
      color: ${Colors.universeColor};
      font-weight: 400;
      font-size: 20px;
    }
    .para {
      //   width: 30rem;
      //   height: 6.5rem;
      color: ${Colors.universeColor};
    }
  }

  .chamber {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    background-color: ${Colors.otherColor};
    padding: 1.25rem;
    &:hover {
      color: ${Colors.otherColor};
      transition: transform 0.2s;
      transform: scale(1.2);
    }

    .head_3 {
      color: ${Colors.universeColor};
      font-weight: 400;
      font-size: 20px;
    }
    .para {
      //   width: 30rem;
      //   height: 6.5rem;
      color: ${Colors.universeColor};
    }
  }
`;
