import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={3} valueB={4}/>;
}


function Sum({valueA, valueB}){
return (
<h1>
Your Sum is {valueA + valueB}
</h1>
)
}