import "./styles.css";

export default function App() {
  return <Greeting name="Greg" />
}


function Greeting({name}){
return(
<h1>Hello, {name === "Greg" ? "Coach!" : name}!</h1>
)
}