import React, { useState, useRef, useEffect } from "react";
import { message } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [place, setPlace] = useState("");
  const [insta, setInsta] = useState("");
  const [friends, setFriends] = useState("");
  const [fb, setFb] = useState("");
  const [interest, setInterest] = useState("");
  const [life, setLife] = useState("");
  const [check, setCheck] = useState(1);
  const [ok, setOk] = useState("<");
  const [olk, setOlk] = useState(">");
  const [lifeVal, setLifeVal] = useState("");
  const [interestVal, setInterestVal] = useState("");
  const navigate = useNavigate();
  //   useEffect(() => {
  //     console.log(check)
  //  check.current=4
  //   },[]);

  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    e.persist();

    setGender(e.target.value);
  };

  const handleAge = (e) => {
    e.persist();

    setAge(e.target.value);
  };
  const handleEdu = (e) => {
    e.persist();
    setEducation(e.target.value);
  };
  const handleFb = (e) => {
    e.persist();
    setFb(e.target.value);
  };
  const handleInsta = (e) => {
    e.persist();
    setInsta(e.target.value);
  };

  const handleLife = (e) => {
    e.persist();
    setLife(e.target.value);
  };
  const handleInterest = (e) => {
    e.persist();
    setInterest(e.target.value);
  };
  // const [place, setPlace] = useState("");
  // const [insta, setInsta] = useState("");
  // const [friends, setFriends] = useState("");
  // const [fb, setFb] = useState("");
  // const [interest, setInterest] = useState("");
  // const [life, setLife] = useState("");
  // const [check, setCheck] = useState(1);
  // const [ok, setOk] = useState("<");
  // const [olk, setOlk] = useState(">");
  // const [lifeVal, setLifeVal] = useState("");
  // const [interestVal, setInterestVal] = useState("");
  const submitHandler = () => {
    if (check == 1) {
      console.log(name, age, education);
      if (name === "" || age == "" || gender === "")
        return message.info("Please fill all the fields");
      setCheck(check + 1);
    } else if (check == 2) {
      if (education === "" || place == "")
        return message.info("Please fill all the fields");
      setCheck(check + 1);
    } else if (check == 3) {
      if (insta === "" || friends == "")
        return message.info("Please fill all the fields");
      setCheck(check + 1);
    } else if (check == 4) {
      if (fb === "") return message.info("Please fill all the fields");
      setCheck(check + 1);
    } else if (check == 5) {
      if (interest === "" || (interest === "others" && interestVal == ""))
        return message.info("Please fill all the fields");
   if (interest === "others") {
     setInterest(interestVal);
   }
      setCheck(check + 1);
    } else if (check == 6) {
      if (
        life === "" ||
        (life === "If none of the above, mention your life event below:" &&
          lifeVal == "")
      )
        return message.info("Please fill all the fields");
      if (life === "If none of the above, mention your life event below:") {
        console.log(lifeVal,'list')
        setLife(lifeVal);
      }
   
      let items = [
        name,
        age,
        gender,
        education,
        place,
        insta,
        friends,
        fb,
        interest,
        life,
      ];

      localStorage.setItem("items", JSON.stringify(items));
    navigate("/Survey");
    }
   
      
  };
  const reduHandler = () => {
    setCheck(check - 1);
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
        <div>0{check}/06</div>
        <div
          onClick={submitHandler}
          style={{
            visibility: `${check == 6 ? "hidden" : "visible"}`,
            cursor: "pointer",
          }}
        >
          {olk}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "center",
          marginTop: "5%",
        }}
      >
        {check == 1 && (
          <Form>
            <Form.Group className="mb-4 clr" controlId="formBasicEmail">
              <Form.Label className="font">1.Your Name</Form.Label>
              <Form.Control
                type="text"
                className="text-center clrx"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4 clr" controlId="formBasic">
              <Form.Label className="font">2.Your Gender</Form.Label>
              <Form.Check
                type="radio"
                label="Male"
                value="Male"
                onChange={handleChange}
                checked={gender === "Male"}
              />
              <Form.Check
                type="radio"
                label="Female"
                value="Female"
                onChange={handleChange}
                checked={gender === "Female"}
              />
            </Form.Group>
            <Form.Group className="mb-4 clr" controlId="formBasic">
              <Form.Label className="font">3.Age</Form.Label>
              <Form.Check
                type="radio"
                label="Under 27"
                value="Under 27"
                onChange={handleAge}
                checked={age === "Under 27"}
              />
              <Form.Check
                type="radio"
                label="Above 27"
                value="Above 27"
                onChange={handleAge}
                checked={age === "Above 27"}
              />
            </Form.Group>
          </Form>
        )}
        {check == 2 && (
          <Form>
            <Form.Group className="mb-4 clr" controlId="formBasic">
              <Form.Label>
                4.What is the highest level of education you have completed? (If
                you are a student, please indicate your current level of
                education.)
              </Form.Label>
              <div style={{ marginLeft: "35%", marginTop: "3%" }}>
                <Form.Check
                  type="radio"
                  label="Primary school"
                  value="Primary school"
                  onChange={handleEdu}
                  checked={education === "Primary school"}
                />
                <Form.Check
                  type="radio"
                  label="Middle (junior high) school"
                  value="Middle (junior high) school"
                  onChange={handleEdu}
                  checked={education === "Middle (junior high) school"}
                />
                <Form.Check
                  type="radio"
                  label="High school"
                  value="High school"
                  onChange={handleEdu}
                  checked={education === "High school"}
                />
                <Form.Check
                  type="radio"
                  label="Bachelor’s degree (Undergraduate)"
                  value="Bachelor’s degree (Undergraduate)"
                  onChange={handleEdu}
                  checked={education === "Bachelor’s degree (Undergraduate)"}
                />
                <Form.Check
                  type="radio"
                  label="Master’s degree (Postgraduate)"
                  value="Master’s degree (Postgraduate)"
                  onChange={handleEdu}
                  checked={education === "Master’s degree (Postgraduate)"}
                />
                <Form.Check
                  type="radio"
                  label="Ph.D. (doctorate)"
                  value="Ph.D. (doctorate)"
                  onChange={handleEdu}
                  checked={education === "Ph.D. (doctorate)"}
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-4 clr"
              controlId="formBasicEmail"
              style={{ marginLeft: "35%" }}
            >
              <Form.Label className="font">
                5.Which District are you from?
              </Form.Label>
              <Form.Control
                type="text"
                className="text-center clrx"
                placeholder="district"
                style={{ width: "30%", marginTop: "2%", marginLeft: "3%" }}
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </Form.Group>
          </Form>
        )}
        {check == 3 && (
          <div>
            <Form>
              <Form.Group className="mb-4 clr" controlId="formBasic">
                <Form.Label>
                  6.In the past week, on average, approximately, how many days
                  have you used Instagram?
                </Form.Label>
                <div style={{ marginLeft: "35%", marginTop: "3%" }}>
                  <Form.Check
                    type="radio"
                    label="Once"
                    value="Once"
                    onChange={handleInsta}
                    checked={insta === "Once"}
                  />
                  <Form.Check
                    type="radio"
                    label="Twice"
                    value="Twice"
                    onChange={handleInsta}
                    checked={insta === "Twice"}
                  />
                  <Form.Check
                    type="radio"
                    label="Thrice"
                    value="Thrice"
                    onChange={handleInsta}
                    checked={insta === "Thrice"}
                  />
                  <Form.Check
                    type="radio"
                    label="4 Days"
                    value="4 Days"
                    onChange={handleInsta}
                    checked={insta === "4 Days"}
                  />
                  <Form.Check
                    type="radio"
                    label="5 Days"
                    value="5 Days"
                    onChange={handleInsta}
                    checked={insta === "5 Days"}
                  />
                  <Form.Check
                    type="radio"
                    label="6 Days"
                    value="6 Days"
                    onChange={handleInsta}
                    checked={insta === "6 Days"}
                  />
                  <Form.Check
                    type="radio"
                    label="Everyday"
                    value="Everyday"
                    onChange={handleInsta}
                    checked={insta === "Everyday"}
                  />
                </div>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-4 clr" controlId="formBasicEmail">
                <Form.Label>
                  7.Let us know your best friend’s name:(Max. Two or Three)
                </Form.Label>
                <Form.Control
                  type="text"
                  className="text-center clrx"
                  placeholder="selvan,john"
                  value={friends}
                  onChange={(e) => setFriends(e.target.value)}
                  style={{ width: "50%", marginTop: "2%", marginLeft: "15%" }}
                />
              </Form.Group>
            </Form>
          </div>
        )}
        {check === 4 && (
          <Form>
            <Form.Group className="mb-4 clr" controlId="formBasic">
              <Form.Label>
                8.In the past week, on average, how many minutes per day have
                you spent on Facebook?:
              </Form.Label>
              <div style={{ marginLeft: "35%", marginTop: "3%" }}>
                <Form.Check
                  type="radio"
                  label="< 10 min"
                  value="< 10 min"
                  onChange={handleFb}
                  checked={fb === "< 10 min"}
                />
                <Form.Check
                  type="radio"
                  label="11 - 30 min"
                  value="11 - 30 min"
                  onChange={handleFb}
                  checked={fb === "11 - 30 min"}
                />
                <Form.Check
                  type="radio"
                  label="31 - 60 min"
                  value="31 - 60 min"
                  onChange={handleFb}
                  checked={fb === "31 - 60 min"}
                />
                <Form.Check
                  type="radio"
                  label="1h - 2h"
                  value="1h - 2h"
                  onChange={handleFb}
                  checked={fb === "1h - 2h"}
                />
                <Form.Check
                  type="radio"
                  label="2h - 3h"
                  value="2h - 3h"
                  onChange={handleFb}
                  checked={fb === "2h - 3h"}
                />
                <Form.Check
                  type="radio"
                  label="> 3h"
                  value="> 3h"
                  onChange={handleFb}
                  checked={fb === "> 3h"}
                />
              </div>
            </Form.Group>
          </Form>
        )}
        {check === 5 && (
          <Form>
            <Form.Group className="mb-4 clr" controlId="formBasic">
              <Form.Label>9.What are you interested in??</Form.Label>
              <div style={{ marginLeft: "10%", marginTop: "3%" }}>
                <Form.Check
                  type="radio"
                  label="Socializing"
                  value="Socializing"
                  onChange={handleInterest}
                  checked={interest === "Socializing"}
                />
                <Form.Check
                  type="radio"
                  label="Sports"
                  value="Sports"
                  onChange={handleInterest}
                  checked={interest === "Sports"}
                />
                <Form.Check
                  type="radio"
                  label="Art and Culture"
                  value="Art and Culture"
                  onChange={handleInterest}
                  checked={interest === "Art and Culture"}
                />

                <Form.Check
                  type="radio"
                  label="Music"
                  value="Music"
                  onChange={handleInterest}
                  checked={interest === "Music"}
                />
                <Form.Check
                  type="radio"
                  label="Reading"
                  value="Reading"
                  onChange={handleInterest}
                  checked={interest === "Reading"}
                />
                <Form.Check
                  type="radio"
                  label="Gaming"
                  value="Gaming"
                  onChange={handleInterest}
                  checked={interest === "Gaming"}
                />
                <Form.Check
                  type="radio"
                  label="Traveling"
                  value="Traveling"
                  onChange={handleInterest}
                  checked={interest === "Traveling"}
                />
                <Form.Check
                  type="radio"
                  label="Shopping"
                  value="Shopping"
                  onChange={handleInterest}
                  checked={interest === "Shopping"}
                />

                <Form.Check
                  type="radio"
                  label="Outing"
                  value="Outing"
                  onChange={handleInterest}
                  checked={interest === "Outing"}
                />
                <Form.Check
                  type="radio"
                  label="Other:(mention below)"
                  value="others"
                  onChange={handleInterest}
                  checked={interest === "others"}
                />
                <Form.Control
                  type="text"
                  className="text-center clrx"
                  placeholder="others"
                  disabled={interest === "others" ? false : true}
                  value={interestVal}
                  onChange={(e) => setInterestVal(e.target.value)}
                />
              </div>
            </Form.Group>
          </Form>
        )}
        {check === 6 && (
          <Form>
            <Form.Group className="mb-4 clr" controlId="formBasic">
              <Form.Label>
                10.Select a life event that had happened to you in the last six
                months:
              </Form.Label>
              <div style={{ marginLeft: "18%", marginTop: "3%" }}>
                <Form.Check
                  type="radio"
                  label="Started at a new school/college"
                  value="Started at a new school/college"
                  onChange={handleLife}
                  checked={life === "Started at a new school/college"}
                />
                <Form.Check
                  type="radio"
                  label="Completed school/college"
                  value="Completed school/college"
                  onChange={handleLife}
                  checked={life === "Completed school/college"}
                />
                <Form.Check
                  type="radio"
                  label="Got a new job"
                  value="Got a new job"
                  onChange={handleLife}
                  checked={life === "Got a new job"}
                />
                <Form.Check
                  type="radio"
                  label="Got engaged"
                  value="Got engaged"
                  onChange={handleLife}
                  checked={life === "Got engaged"}
                />
                <Form.Check
                  type="radio"
                  label="Got married"
                  value="Got married"
                  onChange={handleLife}
                  checked={life === "Got married"}
                />
                <Form.Check
                  type="radio"
                  label="Celebrated an anniversary"
                  value="Celebrated an anniversary"
                  onChange={handleLife}
                  checked={life === "Celebrated an anniversary"}
                />
                <Form.Check
                  type="radio"
                  label="Traveled alone"
                  value="Traveled alone"
                  onChange={handleLife}
                  checked={life === "Traveled alone"}
                />
                <Form.Check
                  type="radio"
                  label="Traveled with friends/family"
                  value="Traveled with friends/family"
                  onChange={handleLife}
                  checked={life === "Traveled with friends/family"}
                />
                <Form.Check
                  type="radio"
                  label="Got a new child"
                  value="Got a new child"
                  onChange={handleLife}
                  checked={life === "Got a new child"}
                />
                <Form.Check
                  type="radio"
                  label="If none of the above, mention your life event below:"
                  value="If none of the above, mention your life event below:"
                  onChange={handleLife}
                  checked={
                    life ===
                    "If none of the above, mention your life event below:"
                  }
                />
                <Form.Control
                  type="text"
                  className="text-center clrx"
                  placeholder="enents"
                  disabled={
                    life ===
                    "If none of the above, mention your life event below:"
                      ? false
                      : true
                  }
                  value={lifeVal}
                  onChange={(e) => setLifeVal(e.target.value)}
                />
              </div>
            </Form.Group>
          </Form>
        )}
        <Button
          variant="dark"
          style={{ marginTop: "5%", marginLeft: "3%" }}
          onClick={submitHandler}
        >
          {check === 6 ? "Submit" : "Next   ->"}
        </Button>{" "}
      </div>
    </>
  );
};

export default Home;
