import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function friendsinschool() {
  const location = useLocation();
 
  console.log(location.state.value)
 return (
    <div className='App-header'>
      How many friends did you have in the school times ?
  <div className='buttondiv'>
 
     <Link to="/myself/bullied"state={{
          value: location.state.value +1
        }}  className="btn btn-primary custombutton">zerodo uzupełnienia</Link> 
     <Link to="/myself/bullied"state={{
          value: location.state.value +2
        }}  className="btn btn-primary custombutton">1 do uzupełnienia</Link>
     <Link to="/myself/grades"state={{
          value: location.state.value +3
        }}  className="btn btn-primary custombutton">2+ do uzupełnienia</Link>
     </div>
     </div>
 );
}