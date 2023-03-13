import React, { useEffect } from 'react'
import final from '../../assets/final.svg'
const Final = () => {
  useEffect(() => {
    fetch("https://web-survey.onrender.com/api", {
      method: "POST",
      headers: {
    
        "content-type": "application/json",
      },
      body: JSON.stringify({
        items: localStorage.getItem("items"),
        feedback_1: localStorage.getItem("feedback_1"),
          feedback_2: localStorage.getItem("feedback_2")
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response,"res");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (

    <div style={{display:"flex",flexDirection:"column",marginTop:"15rem",alignItems:"center",justifyContent:"center",gap:"3rem"}}>
      <img src={final} alt="final" />
      <div style={{color:"#E15A93",width:"50%",paddingLeft:"6%"}}>
        Thanks for your inputs. You have successfully completed the surveys.
      </div>
    </div>
  );
}

export default Final