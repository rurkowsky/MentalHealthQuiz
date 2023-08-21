import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Haveyouever() {
  const location = useLocation();
 
  console.log(location.state.value)
 return (
    <div className='App-header'>
      Have you ever been in relationship?
  <div className='buttondiv'>
 
     <Link to="/myself/wereyouhappy"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">yesdo uzupełnienia</Link> 
     <Link to="/myself/neverinrelation"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">nodo uzupełnienia</Link>
     </div>
     </div>
 );
}