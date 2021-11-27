import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../utilities/context/useAuth";

const BookForm = () => {
  const history = useHistory();
  const userRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const idRef = useRef();
  const phoneRef = useRef();
  const cardRef = useRef();
  const { user } = useAuth();
  const { id } = useParams();
  const [pack, setPack] = useState({});
  useEffect(() => {
    fetch(`  https://dark-skeleton-11734.herokuapp.com/productBy/${id}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, [id]);
  const handelSubmit = (e) => {
    e.preventDefault();
    const userMail = emailRef.current.value;
    const userName = userRef.current.value;
    const userAddress = addressRef.current.value;
    const productId = idRef.current.value;
    const userPhone = phoneRef.current.value;
    const userCard = cardRef.current.value;
    const isPending = true;
    const order = {
      userMail,
      userName,
      userAddress,
      productId,
      userPhone,
      userCard,
      pack,
      isPending,
    };
    fetch("  https://dark-skeleton-11734.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    }).then(() => {
      history.push("/booked");
    });
  };

  return (
    <div className="text-center">
      <Container className="form text-start border-4 rounded-3 p-5 my-4 border-success border">
        <h3 className="text-success">Confirm Your Booking.</h3>
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              ref={userRef}
              defaultValue={user.displayName}
            />

            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              required
              defaultValue={user.email}
              ref={emailRef}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              ref={addressRef}
              type="text"
              required
              placeholder="Address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicID">
            <Form.Label>Product ID</Form.Label>
            <Form.Control type="text" required ref={idRef} defaultValue={id} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicphone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              ref={phoneRef}
              required
              placeholder="Phone"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCard">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              type="text"
              ref={cardRef}
              required
              placeholder="Number"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Confirm
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default BookForm;
