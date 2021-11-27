import React from "react";
import { Button, Card, CardGroup, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Package = (props) => {
  const { _id, name, description, image, price, status } = props.package;
  return (
    <Col sm={12} md={12} lg={4}>
      <CardGroup>
        <Card>
          <Card.Img variant="top" className="w-100 h-50" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 100)}</Card.Text>
            <p>Cost: {price}</p>
          </Card.Body>
          <Card.Footer>
            {status ? (
              <Link to={`/book/${_id}`}>
                <Button variant="dark">Book Now</Button>
              </Link>
            ) : (
              <Button disabled variant="dark">
                Not Available Now
              </Button>
            )}
          </Card.Footer>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default Package;
