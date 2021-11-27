import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import booked from "../../images/booked.gif";
const OPlased = () => {
  return (
    <div className="text-center">
      <img src={booked} alt="" /> <br />
      <Link to="/home"><Button className="btn-success my-lg-4 text-center">Back to Home</Button></Link>
    </div>
  );
};

export default OPlased;
