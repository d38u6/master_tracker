import PropTypes from "prop-types";

import { subjects } from "../../../data/fixtures";

function SubjectsListsContainer({ render }) {
  return render(subjects);
}

SubjectsListsContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default SubjectsListsContainer;
