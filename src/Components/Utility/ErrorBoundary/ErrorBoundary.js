import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBundary extends Component {
  state = { error: null, hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const ErrorCmp = this.props.errorCmp;
    return this.state.hasError ? (
      <ErrorCmp error={this.state.error} />
    ) : (
      this.props.children
    );
  }
}

ErrorBundary.propTypes = {
  errorCmp: PropTypes.elementType.isRequired,
};

export default ErrorBundary;
