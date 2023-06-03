import styled from "styled-components";
import { Colors } from "../../constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .media {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30rem;
    background-color: ${Colors.secondaryColor};
    padding: 1.25rem;

    .social-media {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.3rem;
    }

    .contact-media {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 1.5rem;
    }
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    background-color: ${Colors.universeColor};
    padding: 1.25rem;

    .logo-area {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
    .logo {
      width: 5.5rem;
    }
    .navlinks {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      .nav-link {
        text-decoration: none;
        font-weight: 400;
        font-size: 1rem;
        color: ${Colors.tertiaryColor};
      }
    }
    .nav-btn {
      justify-content: flex-end;
    }
  }
`;
