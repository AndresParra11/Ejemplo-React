import PropTypes from "prop-types";

const Display = ({ contador }) => <div>{contador}</div>;

Display.propTypes = {
  contador: PropTypes.number,
};

export default Display;
