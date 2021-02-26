import { darken } from "polished";
import styled from "styled-components";
import { getColor, getSize } from "../../utils/theme";
import ButtonGroup from "./ButtonGroup";

const Button = styled.button`
  border: none;
  padding: ${getSize(2)} ${getSize(3)};
  border-radius: ${getSize(2)};
  color: ${getColor("bg")};
  background-color: ${(props) =>
    props.disabled
      ? getColor("subtleBg")(props)
      : getColor(props.color)(props)};
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${ButtonGroup} & {
    border-radius: ${getSize(0)};
  }

  ${ButtonGroup} &:first-child {
    border-radius: ${getSize(2)} 0 0 ${getSize(2)};
  }

  ${ButtonGroup} &:last-child {
    border-radius: 0 ${getSize(2)} ${getSize(2)} 0;
  }

  &:focus,
  &:hover,
  &:active {
    background-color: ${(props) =>
      !props.disabled && darken(0.1, getColor(props.color)(props))};
  }
`;

export default Button;
