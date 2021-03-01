import PropTypes from "prop-types";
import styled from "styled-components";
import { getSize } from "../../utils/theme";

const Section = styled.div`
  margin-top: ${(props) => getSize(props.size || 0)};

  &:first-child {
    margin-top: 0;
  }
`;

Section.propTypes = {
  size: PropTypes.number,
};

export default Section;
