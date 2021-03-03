import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { getSize } from "../../utils/theme";

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: ${getSize(2)};
`;

export default ButtonIcon;
