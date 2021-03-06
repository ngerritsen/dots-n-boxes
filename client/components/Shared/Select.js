import React from "react";
import PropTypes from "prop-types";
import { darken } from "polished";
import styled from "styled-components";
import { getColor, getSize, getRadius } from "../../utils/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = ({ children, ...props }) => (
  <SelectContainer>
    <SelectInput {...props}>{children}</SelectInput>
    <SelectIcon icon={faCaretDown} />
  </SelectContainer>
);

Select.propTypes = {
  children: PropTypes.node.isRequired,
};

const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const SelectIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: ${getSize(5)};
  top: ${getSize(3)};
  pointer-events: none;
`;

const SelectInput = styled.select`
  border: none;
  appearance: none;
  padding: ${getSize(3)} ${getSize(9)} ${getSize(3)} ${getSize(5)};
  outline: none;
  border-radius: ${getRadius("rounded")};
  line-height: 1.1;
  color: ${(props) =>
    props.disabled ? getColor("invertedFg") : getColor("fg")};
  background-color: ${getColor("subtleBg")};
  font-weight: bold;
  font-size: 1.4rem;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: background-color 0.2s ease;

  &:focus,
  &:hover,
  &:active {
    background-color: ${(props) =>
      !props.disabled && darken(0.1, getColor("subtleBg")(props))};
  }
`;

export default Select;
