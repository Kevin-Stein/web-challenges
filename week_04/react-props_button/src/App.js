import React from "react";
import "./styles.css";

export default function App() {
  function handleClick(){
    alert("DON'T TOUCH ME!!!");
  }
  
    return (
      <div>
        <Button color="green" disabled={false} text="Submit" onTouch={handleClick}/>
        <Button color="red" disabled={false} text="Danger"onTouch={handleClick}/>
        <Button color="grey" disabled text="Disabled"/>
    </div>
  );
}


function Button({color, disabled, text, onTouch}){
  return (
<button type="button" style={{color: "white", height: "50px", margin: "20px", backgroundColor:color}}
disabled={disabled} onClick={onTouch}


>{text}</button>
)
}

