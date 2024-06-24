import Image from "./Image"
import avatar from "../img/avatar.jpg"

export default function Avatar(){
    return (
        <a href="./imag/avatar.jpg">
        <Image className="round-image" src={avatar} alt="logo" />
      </a>
     )
 
 
 }