import PropTypes from "prop-types";

//It's a only abstract component

function Tab() {
  return null;
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  eventKey: PropTypes.string,
};

export default Tab;
