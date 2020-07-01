import React from "react";
import { Col, Card } from "react-bootstrap";

import image from "../../assets/image/pro.jpg";
import image2 from "../../assets/image/pro2.jpg";

const Subject = () => (
  <>
    <Col md="4">
      <Card>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "160px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
    <Col md="4">
      <Card>
        <Card.Img
          variant="top"
          src={image2}
          style={{ height: "160px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  </>
);

export default Subject;
