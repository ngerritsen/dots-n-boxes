import { darken } from "polished";
import styled from "styled-components";
import { getColor, getSize, getRadius } from "../../utils/theme";
import ButtonGroup from "./ButtonGroup";

const Button = styled.button`
  border: none;
  padding: ${(props) => getSize(props.small ? 2 : 3)} ${(props) => getSize(props.small ? 4 : 5)};
  border-radius: ${getRadius("default")};
  line-height: 1.1;
  color: ${getColor("bg")};
  background-color: ${(props) =>
    props.disabled
      ? getColor("subtleBg")(props)
      : getColor(props.color || "neutral")(props)};
  font-weight: bold;
  font-size: 1.4rem;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: background-color 0.2s ease;

  ${ButtonGroup} & {
    border-radius: ${getSize(0)};
  }

  ${ButtonGroup} &:first-child {
    border-radius: ${getRadius("default")} 0 0 ${getRadius("default")};
  }

  ${ButtonGroup} &:last-child {
    border-radius: 0 ${getRadius("default")} ${getRadius("default")} 0;
  }

  &:focus,
  &:hover,
  &:active {
    background-color: ${(props) =>
      !props.disabled &&
      darken(0.1, getColor(props.color || "neutral")(props))};
  }
`;

export default Button;
