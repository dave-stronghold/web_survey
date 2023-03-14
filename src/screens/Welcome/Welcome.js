import React from 'react'
import wel from '../../assets/ao.svg'
import './Welcome.css'
import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom';
const Welcome = () => {
  const submitHandler=()=>{

  }
  return (
    <div
      className="welcome"
      style={{
        marginTop: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        padding: "0.5rem 3rem",
      }}
    >
      <img src={wel} alt="ok" />
      <div style={{ color: "#E15A93", fontSize: "20px", fontWeight: "700" }}>
        Welcome
      </div>
      <div></div>
      <div
        style={{ marginTop: "1%", width: "25rem", padding: "0.9rem" }}
        className="font"
      >
        Thanks for choosing to participating in this survey. This is a survey
        that gains your insights on personalized ads.{" "}
      </div>
      {/* <div style={{ marginTop: "1%" }} className="font">
        <span className="col">Step 1 :</span> Answer a set of 10 personalized
        questions.
      </div> */}
      <div style={{ width: "20rem" }} className="font">
        <span className="col">Step 1 :</span> Answer a set of 10 personalized
        questions.
      </div>
      <div style={{ width: "20rem" }} className="font">
        <span className="col">Step 2 :</span> Rate ads for two of the services,
        which will be personalized and shown based on your entries.
      </div>
      <div style={{ width: "20rem", verticalAlign: "center" }} className="font">
        <span className="col">Step 3 :</span> Repeat step 2 for another service
        and complete the survey.
      </div>
      <Link to='/home'>
        {" "}
        <Button
          variant="dark"
          style={{ marginTop: "5%" }}
          onClick={submitHandler}
        >
          Go To Survey
        </Button>
      </Link>
    </div>
  );
}

export default Welcome