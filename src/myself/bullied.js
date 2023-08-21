import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Bullied() {
  const location = useLocation();
 
  console.log(location.state.value)
 return (
    <div className='App-header'>
      Have you ever been bullied ?
  <div className='buttondiv'>
 
     <Link to="/myself/grades"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">do uzupełnienia</Link> 
     <Link to="/myself/grades"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     <Link to="/myself/grades"state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     </div>
     </div>
 );
}