import React from "react";
import styled from "styled-components";
import { getSize } from "../utils/theme";
import Title from "./Shared/Title";
import Settings from "./Settings";

const Header = () => (
  <HeaderBar>
    <Title>Dots {"&"} Boxes</Title>
    <Settings />
  </HeaderBar>
);

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${getSize(6)} 0 ${getSize(8)};
`;

export default Header;
