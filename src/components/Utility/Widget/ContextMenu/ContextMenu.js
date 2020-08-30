import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Dropdown } from "react-bootstrap";

import DotsButton from "./DotsButton/DotsButton";

function ContextMenu({ id, items, onSelect, classes }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        as={DotsButton}
        className={classNames(classes?.MenuButton)}
        id={id}
      />
      <Dropdown.Menu alignRight>
        {items.map(({ id, caption, active }) => (
          <Dropdown.Item
            key={id}
            eventKey={id}
            active={active}
            onSelect={onSelect}
          >
            {caption}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

ContextMenu.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string),
};

export default ContextMenu;
