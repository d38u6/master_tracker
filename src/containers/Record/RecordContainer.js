import { connect } from "react-redux";
import PropTypes from "prop-types";

import { removeRecord } from "../../store/actions";

export function RecordContainer({ removeRecord, render }) {
  return render({ removeRecord });
}

RecordContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  removeRecord: PropTypes.func.isRequired,
};

export default connect(null, { removeRecord })(RecordContainer);
