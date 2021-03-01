import styled from "styled-components";
import { getSize, getColor } from "../../utils/theme";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 ${getSize(8)};
  padding: 0;
  color: ${getColor("dark")};
`;

export default Title;
