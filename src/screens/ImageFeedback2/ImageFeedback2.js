import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import "./ImageFeedback2.css";
import ImageCompon2 from "../../components/ImageComponents2/ImageCompon2.js";
import Button from "react-bootstrap/esm/Button";
import Feedback from "react-bootstrap/esm/Feedback";
const ImageFeedback2 = () => {
  const [ok, setOk] = useState("<");
  const [olk, setOlk] = useState(">");
  const [check, setCheck] = useState(1);
  const [value, setValue] = useState("1");
  const [feedback, setFeedback] = useState("1");
  const [data, setData] = useState([]);

  const [questions, setQuestions] = useState([]);
  const [feedback1, setFeedback1] = useState([]);

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
      localStorage.setItem("feedback_2",feedback1)
       if (localStorage.getItem("fields") === "bank") {
         localStorage.setItem("fields", "done");
         
         navigate("/final");
       } else {
         localStorage.setItem("fields", "hotel");
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
    let new_data = JSON.parse(old_data);
    if (new_data.length > 0) {
      setData(new_data);
      setQuestions([
        "",
        `Best hangout place for people ${new_data[1]} & right choice for ${new_data[2]}`,
        `Your close friends ${new_data[5]} have visited us!`,
        "",
        `Best hangout place for people ${new_data[1]} & Top choice for people who are interested in  ${new_data[8]}`,
        "",
        "",
        `Most chosen by people who recently ${new_data[9]} & Top choice for people who are interested in ${new_data[8]}`,
        `Large group of ${new_data[2]} visit us regularly !`,
        `The No. 1 choice of ${new_data[2]} & people near you in ${new_data[4]}`,
        `Most favourite for people who recently ${new_data[9]} & Best hangout place for people who are interested in ${new_data[8]} and people ${new_data[1]}`,
        `Your close friends ${new_data[6]} have visited us!`,
        "",
        `Most liked restaurant by ${new_data[2]} and Top picked by people near you in ${new_data[4]}`,
        "",
        "",
        `Most Loved restaurant by people  ${new_data[1]} and people who recently  ${new_data[9]}`,
        `Top picked by people near you in ${new_data[4]}`,
        `Top picked by people near you in  ${new_data[4]}`,
        `Right choice for people who are interested in ${new_data[8]}`,
        `Your close friends ${new_data[5]} have visited us!`,
        "",
        `Most favourite for people who recently ${new_data[9]}`,
        `Your close friends ${new_data[5]} have visited us!`,
      ]);
    }
  }, []);

  const pull_data = (data) => {
    setFeedback(data);
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
        <ImageCompon2
          questions={[questions[0], questions[1], questions[2], feedback1[0]]}
          func={pull_data}
        />
      )}
      {questions.length > 0 && check == 2 && (
        <ImageCompon2
          questions={[questions[3], questions[4], questions[5]]}
          func={pull_data}
        />
      )}
      {questions.length > 0 && check == 3 && (
        <ImageCompon2
          questions={[questions[6], questions[7], questions[8]]}
          func={pull_data}
        />
      )}
      {questions.length > 0 && check == 4 && (
        <ImageCompon2
          questions={[questions[9], questions[10], questions[11]]}
          func={pull_data}
        />
      )}
      {questions.length > 0 && check == 5 && (
        <ImageCompon2
          questions={[questions[12], questions[13], questions[14]]}
          func={pull_data}
        />
      )}
      {questions.length > 0 && check == 6 && (
        <ImageCompon2
          questions={[questions[15], questions[16], questions[17]]}
          func={pull_data}
        />
      )}
      {questions.length > 0 && check == 7 && (
        <ImageCompon2
          questions={[questions[18], questions[19], questions[20]]}
          func={pull_data}
        />
      )}
      {questions.length > 0 && check == 8 && (
        <ImageCompon2
          questions={[questions[21], questions[22], questions[23]]}
          func={pull_data}
        />
      )}
      <Button
        variant="dark"
        className="img2_button"
        style={{ marginTop: "1%", marginLeft: "48%" }}
        onClick={submitHandler}
      >
        {check === 8 ? "Submit" : "Next   ->"}
      </Button>{" "}
    </>
  );
};

export default ImageFeedback2;
