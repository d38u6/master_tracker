import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function FileButton({ onChange, children, ...btnProps }) {
  const fileInput = useRef(null);
  return (
    <>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileInput}
        onChange={onChange}
      />
      <Button {...btnProps} onClick={() => fileInput.current.click()}>
        {children}
      </Button>
    </>
  );
}

FileButton.propTypes = {
  onChange: PropTypes.func,
  btnProps: PropTypes.object,
  childer: PropTypes.node,
};

export default FileButton;
