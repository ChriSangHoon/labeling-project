import React, { useState, useEffect } from "react";
import labelFile from "./assets/label.json";


function App(){ 
  const [checkedInputs, setCheckedInputs] = useState([]);
  const changeHandler = (checked, id) => {
    if (checked) {
    setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
    setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
};
  return (

  	<div>
      <input 
        id={labelFile.labels[0].id}
        type="checkbox" 
        onChange={(e)=>{
          changeHandler(e.currentTarget.checked, labelFile.labels[0].id)
        }}
        checked={checkedInputs.includes(labelFile.labels[0].id) ? true : false}
      />
      <input 
        id={labelFile.labels[1].id}
        type="checkbox" 
        onChange={(e)=>{
          changeHandler(e.currentTarget.checked, labelFile.labels[1].id)
        }}
        checked={checkedInputs.includes(labelFile.labels[1].id) ? true : false}
      />
      <input 
        id={labelFile.labels[2].id}
        type="checkbox" 
        onChange={(e)=>{
          changeHandler(e.currentTarget.checked, labelFile.labels[2].id)
        }}
        checked={checkedInputs.includes(labelFile.labels[2].id) ? true : false}
      />
      <input
        type="submit"
        onClick={(e)=>{
          console.log(checkedInputs)
        }}
      />
    </div>

  )
}


export default App;