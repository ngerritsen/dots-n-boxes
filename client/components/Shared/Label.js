import styled from "styled-components";
import { getSize } from "../../utils/theme";

const Label = styled.label`
  display: inline-block;
  margin: 0 0 ${getSize(2)};
  font-weight: bold;
`;

export default Label;
