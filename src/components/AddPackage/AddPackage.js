import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const AddPackage = () => {
  const history = useHistory();
  const nameRef = useRef();
  const detailsRef = useRef();
  const priceRef = useRef();
  const fileRef = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    const image = fileRef.current.value;
    const description = detailsRef.current.value;
    const price = priceRef.current.value;
    const name = nameRef.current.value;
    const item = {
      name,
      description,
      image,
      price,
      status: true,
    };

    fetch("  https://toure-server-production.up.railway.app/addPackage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(() => {
      history.push("/home#packages");
    });
  };
  return (
    <Container className="form text-start border-4 rounded-3 p-5 my-4 border-success border">
      <h3 className="text-success">Add New Package</h3>
      <Form onSubmit={handelSubmit} className=" mx-auto">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Package Name:</Form.Label>
          <Form.Control
            ref={nameRef}
            required
            type="text"
            placeholder="Enter Package Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDetails">
          <Form.Label>Package Details:</Form.Label>
          <Form.Control
            type="text"
            ref={detailsRef}
            required
            placeholder="Enter Details"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupprice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="number"
            required
            placeholder="Enter Price"
          />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Image Url:</Form.Label>
          <Form.Control ref={fileRef} required type="text" size="sm" />
        </Form.Group>
        <Button type="submit" variant="success">
          Add Package
        </Button>
      </Form>
    </Container>
  );
};

export default AddPackage;
