import React from "react";
import { Link } from "react-router-dom";
import "./no.css"
import { Button } from "react-bootstrap";
/* you not found!!, sorry, page not found component this is!!! */
const PageNotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-danger mb-0 sm-fa-1 mt-5 logo">
        <i className="fas fa-car-crash"></i>
      </h1>
      <h1 className=" mt-0 text-dark  mb-5">
        page not found <i className="far fa-sad-tear"></i>
      </h1>
      <Link to="/home">
        <Button variant="danger mb-5">Home</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
