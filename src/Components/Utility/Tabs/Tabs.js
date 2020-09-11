import React from "react";
import PropTypes from "prop-types";
import { Tab, Nav } from "react-bootstrap";

import classes from "./Tabs.module.css";

function renderNavItem(child) {
  const { eventKey, title } = child.props;
  return (
    <Nav.Item>
      <Nav.Link eventKey={eventKey}>{title}</Nav.Link>
    </Nav.Item>
  );
}

function renderContent(child) {
  const { title, ...rest } = child.props;
  return <Tab.Pane {...rest} />;
}

function getDefaultActiveKey(children) {
  return Array.isArray(children)
    ? children?.[0]?.props?.eventKey
    : children?.props?.eventKey;
}

function Tabs({ id, defaultActiveKey, children }) {
  return (
    <Tab.Container
      id={id}
      defaultActiveKey={defaultActiveKey || getDefaultActiveKey(children)}
      transition={false}
    >
      <Nav variant="pills" className={classes.Nav} fill>
        {React.Children.map(children, renderNavItem)}
      </Nav>
      <Tab.Content className={classes.Content}>
        {React.Children.map(children, renderContent)}
      </Tab.Content>
    </Tab.Container>
  );
}

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  defaultActiveKey: PropTypes.string,
};

export default Tabs;
