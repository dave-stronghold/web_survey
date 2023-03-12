import React,{useEffect, useState} from 'react'
import bank from "../../assets/bank.svg";
import spoon from "../../assets/spoon.svg";
import tick from "../../assets/tick.svg";

import Button from "react-bootstrap/esm/Button";
import "./survey.css"
import { Link } from 'react-router-dom';
const Survey = () => {
const[hover,setHover]=useState(0)
const[text,setText]=useState(0)
const[link,setLink]=useState(0)
let [val,setVal]=useState(0)
    const tickHover=(id)=>{
        
     setHover(id)
    }
const submitHandler =()=>{
    console.log("running")
}
useEffect(()=>{
let fields=  localStorage.getItem("fields")
console.log(fields,'fields')
  if(fields==="bank") {
    setHover(2)
     setVal(2)
     setLink('hotel')
    }
  else if(fields==="hotel") {
    setVal(2)
    setHover(2)
    setLink("bank")
  }
  else return
},[])
const submitOk=(val)=>{

if(val==1) setLink('bank')
else setLink('rest')

}
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2%",
        }}
        className="font"
      >
        Survey
      </div>
      <div
        style={{
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div className="font">Complete first Survey</div>
        <div>
          Complete <span style={{ color: "#E15A93" }}>both</span> surveys one
          after another.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            width: "10%",
            minWidth: "10rem",
            minHeight: "10rem",
            border: "1px solid black",
            borderRadius: "15px",
            position: "relative",
          }}
          className="lop"
          onClick={() => tickHover(1)}
          onMouseEnter={() => {
            setText(1);
          }}
          onMouseLeave={() => {
            setText(0);
          }}
        >
          <img
            src={tick}
            alt="tick"
            style={{ position: "absolute", visibility: "hidden" }}
            className={
              hover === 1 && val === 0 || val ===2
                ? "left_tick"
                : hover === 2 && val===0 || val===1
                ? "right_tick"
                : ""
            }
          />{" "}
          <img
            src={bank}
            alt="ok"
            onClick={() => submitOk(1)}
            style={{ marginLeft: "37%", marginTop: "25%" }}
          />
          <span
            className={text === 1 ? "white" : "black"}
            style={{ marginLeft: "33%" }}
          >
            Banking
          </span>
        </div>
        <div
          style={{
            width: "10%",
            minWidth: "10rem",
            minHeight: "10rem",
            border: "1px solid black",
            borderRadius: "15px",
          }}
          className="lop"
          onClick={() => tickHover(2)}
          onMouseEnter={() => {
            setText(2);
          }}
          onMouseLeave={() => {
            setText(3);
          }}
        >
          {" "}
          <img
            src={spoon}
            alt="ok"
            onClick={() => submitOk(2)}
            style={{ marginLeft: "37%", marginTop: "25%" }}
          />
          <span className={text === 2 ? "white" : "black"}>Restaurant</span>
        </div>
      </div>
      <div
        style={{
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div style={{ padding: "0 18%" }}>
          Each survey displays 8 ads based on the previous set of questionnaire.
          After seeing each ad, please score the ads from a scale of 1 to 7
          based on the{" "}
          <span style={{ color: "#E15A93" }}>level of personalization.</span>{" "}
        </div>
        <div style={{ padding: "0 18%" }}>
          <span style={{ color: "#E15A93" }}>Note :</span> All Ads will look
          similar in design, please go through the contents carefully and score
          them accordingly.
        </div>
        <Link to={link === "bank" ? "/image" : "/image2"}>
          {" "}
          <Button
            variant="dark"
            style={{ marginTop: "5%" }}
            onClick={submitHandler}
          >
            Proceed &#8594;
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Survey