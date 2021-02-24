import React from "react";
import PropTypes from "prop-types";

import sizes from "../constants/sizes.js";

const Resize = ({ isDisabled, resize }) => (
  <div>
    {sizes.map(({ width, height }, index) => (
      <button
        key={index}
        type="button"
        className={
          "button alt-default alt-grouped" + (isDisabled ? " is-disabled" : "")
        }
        onClick={() => !isDisabled && resize(width, height)}
      >
        {width} x {height}
      </button>
    ))}
  </div>
);

Resize.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  resize: PropTypes.func.isRequired,
};

export default Resize;
