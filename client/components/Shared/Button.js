import { darken, getLuminance } from "polished";
import styled from "styled-components";
import { getColor, getSize, getRadius } from "../../utils/theme";

const Button = styled.button`
  border: none;
  padding: ${getSize(3)} ${getSize(5)};
  border-radius: ${getRadius("rounded")};
  line-height: 1.1;
  color: ${(props) =>
    getLuminance(getColor(props.color || "subtleBg")(props)) > 0.6
      ? getColor("fg")
      : getColor("invertedFg")};
  background-color: ${(props) =>
    props.disabled
      ? getColor("subtleBg")(props)
      : getColor(props.color || "subtleBg")(props)};
  font-weight: bold;
  font-size: 1.4rem;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: background-color 0.2s ease;

  &:focus,
  &:hover,
  &:active {
    background-color: ${(props) =>
      !props.disabled &&
      darken(0.1, getColor(props.color || "subtleBg")(props))};
  }
`;

export default Button;
