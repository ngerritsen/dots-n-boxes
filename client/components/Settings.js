import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";

import limits from "../../shared/constants/limits";
import { getSize } from "../utils/theme";
import { getColor } from "../utils/theme";
import { updateName } from "../slices/user";
import { getName } from "../selectors";
import Input from "./Shared/Input";
import Label from "./Shared/Label";
import Button from "./Shared/Button";
import Modal from "./Shared/Modal";
import Section from "./Shared/Section";
import IconButton from "./Shared/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const name = useSelector(getName);
  const [value, setValue] = useState(name);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const val = event.target.value.trim();

    setValue(event.target.value);

    if (!val) {
      setError("Username cannot be empty.");
      return;
    }

    if (val.length > limits.maxUsernameLength) {
      setError("Username cannot be longer than 12 characters.");
      return;
    }

    setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(updateName({ name: value }));
    setIsOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faCog} />
      </IconButton>
      <Modal isOpen={isOpen}>
        <Form onSubmit={onSubmit}>
          <Label>Enter your name:</Label>
          <Input type="text" value={value} onInput={onChange} />
          {error && <Error>{error}</Error>}
          <Section size={4}>
            <Button color="primary" disabled={!value || error} type="submit">
              Save
            </Button>
            &nbsp;
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
