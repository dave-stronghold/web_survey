import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import "./ImageFeedback.css";
import ImageCom from "../../components/ImageComponents/imageCom.js";
import Button from "react-bootstrap/esm/Button";
const ImageFeedback = () => {
  const [ok, setOk] = useState("<");
  const [olk, setOlk] = useState(">");
  const [check, setCheck] = useState(1);
  const [value, setValue] = useState("1");
  const [feedback, setFeedback] = useState("1");
  const [data, setData] = useState([]);

  const [questions, setQuestions] = useState([]);
  const [feedback1, setFeedback1] = useState("");

  const navigate = useNavigate();


    const trueFind = (data) => {
      let final = Object.values(data);
      let new_val = false;
      let count = 0;
      let final_count = 0;
      final.map((val) => {
        count += 1;
        if (val === true) {
          final_count = count;
          new_val = true;
        }
      });
      return [new_val, final_count];
    };
  const submitHandler = () => {
    if (check == 8) {
        localStorage.setItem("feedback_1", feedback1);
           if (localStorage.getItem("fields") === "hotel") {
             localStorage.setItem("fields", "done");
                  navigate("/final");
           }else{
                  localStorage.setItem("fields", "bank");
                 navigate("/Survey");
           }
 
    } else if (check < 8) {
      if (!trueFind(feedback)[0]) return message.info("Please give a rarting");
      else {
        setFeedback1((prevFeedbacks) => [
          ...prevFeedbacks,
          trueFind(feedback)[1],
        ]);
        setCheck(check + 1);
   
      }
    }
  };
  const reduHandler = () => {
    setCheck(check - 1);
  };
  useEffect(() => {
    const old_data = localStorage.getItem("items");
    let new_data = JSON.parse(old_data)
    if (new_data.length > 0) {
        
      setData(new_data);
      setQuestions([
        `Best choice for people ${new_data[1]} and largely preferred by ${new_data[2]}`,
        `Your close friends ${new_data[5]} like our services!`,
        `Best choice for people ${new_data[1]} and largely preferred by people who are interested in ${new_data[8]}`,
        "",
        `Best choice for people who recently ${new_data[9]} and largely preferred by people who are interested in ${new_data[8]}`,
        `Large group of  ${new_data[2]} are pleased with our banking services!`,
        `Best choice for people who recently ${new_data[9]} and largely preferred by people who are interested in ${new_data[8]} and people ${new_data[1]}`,
        `Large group of ${new_data[2]} are pleased with our banking services!`,
        `Largely preferred by people near you in ${new_data[4]}, Large group of ${new_data[2]} are pleased with our banking services!`,
        "",
        `Best choice for people ${new_data[1]} and who are recently ${new_data[9]}`,
        `Largely preferred by people near you in ${new_data[4]}.`,
        `Best choice for people who are interested in ${new_data[8]}`,
        `Largely preferred by people near you in ${new_data[4]}.`,
        `Best choice for people who recently ${new_data[9]}`,
        `Your close friends  ${new_data[5]} like our services!`,
      ]);
    }
    
  }, []);
 
   const pull_data = (data, val) => {
     setFeedback(data);
     localStorage.setItem(val, JSON.stringify(data));
   };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30%",
          justifyContent: "center",
          fontSize: "20px",
          marginTop: "3%",
        }}
      >
        <div
          style={{
            visibility: `${check == 1 ? "hidden" : "visible"}`,
            cursor: "pointer",
          }}
          onClick={reduHandler}
        >
          {ok}
        </div>
        <div>0{check}/08</div>
        <div
          onClick={submitHandler}
          style={{
            visibility: `${check == 8 ? "hidden" : "visible"}`,
            cursor: "pointer",
          }}
        >
          {olk}
        </div>
      </div>
      {questions.length > 0 && check == 1 && (
        <ImageCom
          questions={[questions[0], questions[1], 9]}
          func={pull_data}
        />
      )}
      {questions.length > 0 && check == 2 && (
        <ImageCom questions={[questions[2], questions[3],10]} func={pull_data} />
      )}
      {questions.length > 0 && check == 3 && (
        <ImageCom questions={[questions[4], questions[5],11]} func={pull_data} />
      )}
      {questions.length > 0 && check == 4 && (
        <ImageCom questions={[questions[6], questions[7],12]} func={pull_data} />
      )}
      {questions.length > 0 && check == 5 && (
        <ImageCom questions={[questions[8], questions[9],13]} func={pull_data} />
      )}
      {questions.length > 0 && check == 6 && (
        <ImageCom questions={[questions[10], questions[11],14]} func={pull_data} />
      )}
      {questions.length > 0 && check == 7 && (
        <ImageCom questions={[questions[12], questions[13],15]} func={pull_data} />
      )}
      {questions.length > 0 && check == 8 && (
        <ImageCom questions={[questions[14], questions[15],16]} func={pull_data} />
      )}
      <Button
        variant="dark"
        className="img1_button"
        style={{ marginTop: "1%", marginLeft: "48%" }}
        onClick={submitHandler}
      >
        {check === 8 ? "Submit" : "Next   ->"}
      </Button>{" "}
    </>
  );
};

export default ImageFeedback;
