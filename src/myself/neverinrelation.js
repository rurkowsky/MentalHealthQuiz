import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Neverinrelation() {
  const location = useLocation();
 
  console.log(location.state.value)
 return (
    <div className='App-header'>
      Did you ever tried to be with someone?
  <div className='buttondiv'>
 
     <Link to="/myself/friendsinschool" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">do uzupełnienia</Link> 
     <Link to="/myself/friendsinschool" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     <Link to="/myself/friendsinschool" state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     </div>
     </div>
 );
}