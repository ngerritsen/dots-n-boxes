import styled from "styled-components";
import { getColor } from "../../utils/theme";
import { getSize } from "../../utils/theme";

const Input = styled.input`
  width: 100%;
  border: 1px solid ${getColor("subtleBg")};
  box-shadow: none;
  color: ${getColor("fg")};
  border-radius: ${getSize(2)};
  padding: ${getSize(3)} ${getSize(4)};
  background: ${getColor("bg")};
  font-size: 1.6rem;
`;

export default Input;
