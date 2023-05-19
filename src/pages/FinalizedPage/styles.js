import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  height: 100vh;
`;

export const StyledContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  padding: 4rem;

  img {
    width: 12rem;
  }

  @media (max-width: 1140px) {
    padding: 2rem;
  }

  @media (max-width: 550px) {
    padding: 2rem;
    padding-top: 15rem;
    width: 100%;
    height: 100%;

    img {
      width: 10rem;
    }
  }
`;

export const Price = styled.span`
  color: #6495ed;
`;
