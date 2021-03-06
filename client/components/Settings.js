import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { faCircleNotch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import userConstants from "../../shared/constants/user";
import { getSize } from "../utils/theme";
import { getColor } from "../utils/theme";
import { updateName, submitName } from "../slices/user";
import { getName, getToken } from "../selectors";
import Input from "./Shared/Input";
import Label from "./Shared/Label";
import Button from "./Shared/Button";
import Modal from "./Shared/Modal";
import Section from "./Shared/Section";
import ButtonIcon from "./Shared/ButtonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const name = useSelector(getName);
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value.trim();

    dispatch(updateName({ name: value }));

    if (!value) {
      setError("Username cannot be empty.");
      return;
    }

    if (value.length > userConstants.maxUsernameLength) {
      setError("Username cannot be longer than 12 characters.");
      return;
    }

    setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (error) {
      return;
    }

    dispatch(submitName({ name }));
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <Button
          color="subtleBg"
          small
          disabled={!token}
          onClick={() => token && setIsOpen(true)}
        >
          {token && (
            <>
              <ButtonIcon icon={faUserCircle} />
              {name || "Unknown"}
            </>
          )}
          {!token && <FontAwesomeIcon icon={faCircleNotch} spin />}
        </Button>
      </div>
      <Modal isOpen={isOpen}>
        <Form onSubmit={onSubmit}>
          <Label>Enter your name:</Label>
          <Input type="text" value={name} onInput={onChange} />
          {error && <Error>{error}</Error>}
          <Section size={4}>
            <Button color="primary" disabled={!name || error} type="submit">
              Save
            </Button>{" "}
            &nbsp;
            <Button type="submit" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </Section>
        </Form>
      </Modal>
    </>
  );
};

const Form = styled.form`
  padding: 0;
  margin: 0;
`;

const Error = styled.p`
  color: ${getColor("danger")};
  font-size: 1.4rem;
  margin: ${getSize(1)} 0 0;
`;

Settings.propTypes = {
  fullWidth: PropTypes.bool,
  small: PropTypes.bool,
};

export default Settings;
