import { styled } from "styled-components";
import { blue, typescale, white } from "../utils";

export const Button = styled.button`
  font-size: ${typescale.paragraph};
  border-radius: 3px;
  padding: 9px 20px;
  cursor: pointer;
  transition: background-color 0.3s linear, color 0.3s linear;
  &:hover {
    background-color: ${blue[100]};
    color: ${white[100]};
  }
  &:focus {
    outline: 1px solid ${blue[100]};
    outline-offset: 3px;
  }
  &:active {
    background-color: ${blue[100]};
    border-color: ${blue[100]};
    color: ${white[100]};
  }
  &:disabled {
    cursor: not-allowed;
    background: none;
    background-color: ${white[200]};
    color: ${white[100]};
    border: none;
  }

  &.large {
    font-size: ${typescale.header4};
    padding: 16px 24px;
  }

  &.small {
    font-size: ${typescale.text};
    padding: 8px;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${blue[100]};
  color: ${white[100]};
`;
