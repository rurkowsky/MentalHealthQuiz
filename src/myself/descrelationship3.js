import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Descrelationship3() {
  const location = useLocation();
 
  console.log(location.state.value)
 return (
    <div className='App-header'>
      Do you feel appreciated?
  <div className='buttondiv'>
 
     <Link to="/myself/friendsinschool"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">do uzupełnienia</Link> 
     <Link to="/myself/friendsinschool"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     <Link to="/myself/friendsinschool"state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     </div>
     </div>
 );
}