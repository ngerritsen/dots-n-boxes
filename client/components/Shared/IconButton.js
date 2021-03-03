import styled from "styled-components";
import { getSize } from "../../utils/theme";

const Button = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: ${getSize(1)};
  cursor: pointer;
  font-size: inherit;

  &:focus,
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

export default Button;
