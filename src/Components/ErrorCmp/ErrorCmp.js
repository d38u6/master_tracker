import React from "react";
import PropTypes from "prop-types";
import { Accordion, Button } from "react-bootstrap";
import RestoreDefaultSettingsContainer from "Containers/Settings/RestoreDefaultSettingsContainer";

import classes from "./ErrorCmp.module.css";

function ErrorCmp({ error: { name, message } }) {
  return (
    <div className={classes.ErrorWrapper}>
      <h1 className={classes.Header}>:( Upss...</h1>
      <p>Somthing went wrong! Please refresh page and try again.</p>

      <Accordion className={classes.MarginBottom}>
        <Accordion.Toggle as={Button} variant="info" eventKey="0">
          Show more info
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <span className={classes.ErrorMsg}>{message}</span>
        </Accordion.Collapse>
      </Accordion>

      <p>When the error occurs again try to restore the default settings</p>
      <RestoreDefaultSettingsContainer
        render={({ restore }) => (
          <Button variant="info" onClick={restore}>
            Restore default settings
          </Button>
        )}
      />
    </div>
  );
}

ErrorCmp.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default ErrorCmp;
