import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}


function Article(){
return(
  <article className = "article" >
    <h2 className = "article__title">Gott verdammt</h2>
     <label htmlFor = "input">Your Input</label>
    <input type="text" id = "input"></input>
    <a
    className = "article__link"
    href = "https://personal-website-woad-nu-89.vercel.app"
    >My personal Website</a>
  </article>
)
}