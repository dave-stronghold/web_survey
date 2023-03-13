import React, { useEffect, useState } from "react";
import bank from "../../assets/bank_img.jpeg";
import "./imageCom.css";
const ImageCom = ({ questions, func }) => {
  const [options, setOptions] = useState(JSON.parse(localStorage.getItem(questions[2]))||{
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });
  const new_options = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  };
  useEffect(() => {
    func(options, questions[2]);
  }, [options]);
useEffect(() => {
  if (localStorage.getItem(questions[2])) {
    setOptions(JSON.parse(localStorage.getItem(questions[2])));
  }
}, []);
  const handleChoose = (id, value) => {
    
    setOptions({ ...new_options, [id]: !value });
  };
  return (
    <div>
      {" "}
      <div style={{ position: "relative" }}>
        <img className="bank" src={bank} alt="run" />
        <span className="width ok_text font_style">{questions[0]}</span>
        <span className="font_style do_text width2">{questions[1]}</span>
      </div>
      <div className="feed_points">
        <div style={{ fontWeight: "500", fontSize: "18px", marginLeft: "2%" }}>
          This ad is tailored to my situation
        </div>
        <div
          style={{ display: "flex", gap: "2%", marginTop: "2%" }}
          className="run_point"
        >
          {Object.entries(options).map((key) => (
            <div
              onClick={() => handleChoose(key[0], key[1])}
              style={{
                width: "1.6rem",
                height: "2.1rem",
                border: "1px solid #A29EB6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              className={key[1] ? "feedback" : "normal_feedback"}
            >
              {key[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCom;
