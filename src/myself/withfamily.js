import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Withfamily() {
    const location = useLocation();
 return (
    <div className='App-header'>
        How often do you see each other?
  <div className='buttondiv'>
 
     <Link to="/myself/medications" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">do uzupełnienia</Link> 
     <Link to="/myself/medications" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     <Link to="/myself/medications" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     </div>
     </div>
 );
}