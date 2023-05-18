import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const CardCustom = styled(Card)`
  padding-top: 1rem;
  max-height: 25rem;

  &:hover {
    box-shadow: 0px 0px 4px 3px #cecece;
  }

  &:hover .content {
    transform: translateY(-50%);
    transition: 1s all;
  }

  .content {
    background: rgba(255, 255, 255, 0.6);
  }
`;

export const ContentHidden = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(25%);
`;

export const ProductAction = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  button {
    display: flex;
    border: none;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
    }
  }
  input {
    text-align: center;
    height: 2rem;
    width: 6rem;
    color: gray;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
`;
