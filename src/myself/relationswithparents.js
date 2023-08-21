import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Relationswithparents() {
    
   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
        What are your relations with parents?
  <div className='buttondiv'>
 
     <Link to="/myself/withfamily"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">do uzupełnieniaOK</Link> 
     <Link to="/myself/medications"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">do uzupełnienia I hate them</Link>
     <Link to="/myself/medications"state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">do uzupełnienia no parents</Link>
     </div>
     </div>
 );
}