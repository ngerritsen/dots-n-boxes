import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import React from "react";
import styled, { keyframes } from "styled-components";
import { getNotification } from "../selectors";
import { getSize, getColor } from "../utils/theme";

const Notification = () => {
  const notification = useSelector(getNotification);
  return ReactDOM.createPortal(
    notification.message && (
      <NotificationContainer>
        <NotificationBox type={notification.type}>
          {notification.message}
        </NotificationBox>
      </NotificationContainer>
    ),
    document.getElementById("notification")
  );
};

const popUp = keyframes`
  from {
    transform: translate(0, 15rem);
  }
  to {
    transform: translate(0, 0);
  }
`;

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 ${getSize(3)} ${getSize(3)};
  pointer-events: none;
  text-align: center;
  transform: translate(0, 0);
  animation: ${popUp} 0.2s ease;
`;

const NotificationBox = styled.p`
  display: inline-block;
  padding: ${getSize(3)} ${getSize(4)};
  background-color: ${(props) =>
    getColor(props.type === "error" ? "danger" : "success")(props)};
  color: ${getColor("bg")};
  border-radius: ${getSize(2)};
`;

export default Notification;
