import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Didappreciated() {
  const location = useLocation();
 
  console.log(location.state.value)
 return (
    <div className='App-header'>
      Did you felt appreciated?
  <div className='buttondiv'>
 
     <Link to="/friendsinschool" state={{
          value: location.state.value +1
        }}  className="btn btn-primary custombutton">Yes</Link> 
     <Link to="/friendsinschool" state={{
          value: location.state.value +2
        }}  className="btn btn-primary custombutton">No</Link>
     
     </div>
     </div>
 );
}