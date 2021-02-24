import React from "react";
import PropTypes from "prop-types";

const Reset = ({ isDisabled, reset }) => (
  <button
    type="button"
    className={"button alt-negative" + (isDisabled ? " is-disabled" : "")}
    onClick={isDisabled ? undefined : reset}
  >
    Reset
  </button>
);

Reset.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Reset;
