import React from 'react'
import final from '../../assets/final.svg'
const Final = () => {
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