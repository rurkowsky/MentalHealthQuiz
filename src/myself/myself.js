import React, {useState} from 'react';
import { Link} from "react-router-dom";




export default function Myself() {
  const [value] = useState(0)
  console.log(value)

 return (
  <div className='App-header'>
      What is your gender?
      <div className='buttondiv'>
     <Link to="/myself/age" state={{
          value: value +1
        }} className="btn btn-primary custombutton" >Man</Link> 
     <Link to="/myself/age" state={{
          value: value +2
        }} className="btn btn-primary custombutton"  >Woman</Link>
     <Link to="/myself/age"  state={{
          value: value +3
        }}className="btn btn-primary custombutton" >F-16 Fighting Falcon</Link>
     </div>
 </div>

 
 );
}