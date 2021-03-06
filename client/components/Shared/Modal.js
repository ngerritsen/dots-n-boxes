import { transparentize } from "polished";
import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { getColor, getSize } from "../../utils/theme";

const Modal = ({ children, isOpen }) =>
  ReactDOM.createPortal(
    isOpen && (
      <Overlay>
        <ModalBox>{children}</ModalBox>
      </Overlay>
    ),
    document.getElementById("modal")
  );

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${getSize(2)};
  background-color: ${(props) => transparentize(0.7, getColor("fg")(props))};
`;

const ModalBox = styled.div`
  background-color: ${getColor("bg")};
  padding: ${getSize(6)};
  border-radius: ${getSize(3)};
  margin-top: -${getSize(12)};
  min-width: 30rem;
`;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Modal;
