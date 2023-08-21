import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function CRelationship() {
    const location = useLocation();
 
    console.log(location.state.value)
 return (
    <div className='App-header'>
        Are you in relationship?
  <div className='buttondiv'>
 
     <Link to="/myself/descrelationship"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">yesdo uzupełnienia</Link> 
     <Link to="/myself/haveyouever"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">nodo uzupełnienia</Link>
     <Link to="/myself/haveyouever" state={{
          value: location.state.value +3
        }}className="btn btn-primary custombutton">just friendsdo uzupełnienia</Link>
     </div>
     </div>
 );
}