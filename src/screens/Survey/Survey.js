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
const[link,setLink]=useState("")
const [fields,setFields]=useState("")
let [val,setVal]=useState(0)
const firstText = "Complete first Survey";
const lastText = "Complete last Survey";
    const tickHover=(id)=>{
   setHover(id);
   if (id == 1) setLink("bank");
   else setLink("hotel");
   console.log(link,'link')
    }
const submitHandler =()=>{
    console.log("running")
}
useEffect(()=>{
let value=  localStorage.getItem("fields")

  if (value === "bank") {
    setHover(2);
    setVal(2);
    setLink("hotel");
  } else if (value === "hotel") {
    setVal(2);
    setHover(2);
    setLink("bank");
  
  }
},[])
const submitOk=(val)=>{


}
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          marginLeft:"25px",
          marginRight:"25px",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        Survey
      </div>
      <div className='capCon'
        style={{
          marginTop: "2rem",
          
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: "18px" }}>
        {val===1||val===2 ? lastText:firstText}
        </div>
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
          gap: "16px",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            width: "10%",
            minWidth: "10rem",
            minHeight: "10rem",
            boxShadow:" 0px 1px 8px rgba(0, 0, 0, 0.08)",
            borderRadius: "16px",
            position: "relative",
            cursor: "pointer",
          }}
          className={val === 1 ? "opacity" : "lop"}
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
              (hover === 1 && val === 0) || val === 2
                ? "left_tick"
                : (hover === 2 && val === 0) || val === 1
                ? "right_tick"
                : ""
            }
          />{" "}
          <img
            src={bank}
            alt="ok"
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
            boxShadow:" 0px 1px 8px rgba(0, 0, 0, 0.08)",
            borderRadius: "16px",
            cursor: "pointer",
          }}
          className={val === 2 ? "opacity" : "lop"}
   
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
        <div
          style={{ padding: "0 18%", width: "80%", color: "#A29EB6" }}
          className="first_para"
        >
          Each survey displays 8 ads based on the previous set of questionnaire.
          After seeing each ad, please score the ads from a scale of 1 to 7
          based on the{" "}
          <span style={{ color: "#E15A93" }}>level of personalization.</span>{" "}
        </div>
        <div
          style={{ padding: "0 18%", color: "#A29EB6", width: "80%" }}
          className="second_para"
        >
          <span style={{ color: "#E15A93" }}>Note :</span> All Ads will look
          similar in design, please go through the contents carefully and score
          them accordingly.
        </div>
        <Link
          to={link === "bank" ? "/image" : link === "hotel" ? "/image2" : ""}
        >
          {" "}
          <Button
            variant="dark"
            style={{ marginTop: "5%" ,borderRadius:"12px"}}
            onClick={submitHandler}
            disabled={link === ""}
          >
            Proceed &#8594;
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Survey