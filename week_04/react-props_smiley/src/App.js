import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={false}/>;
}


function Smiley ({isHappy}){
return(
  <h1>I´m {isHappy ? "😊" : "😒"}</h1>


)
}