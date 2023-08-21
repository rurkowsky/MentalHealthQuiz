import React, {useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Concentration() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)
 return (
  <div className='App-header'>
Does your child have problem with concentration ?
      <div className='buttondiv'>
     <Link to="/suicide" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton" >No</Link> 
     <Link to="/suicide" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton"  >Sometimes</Link>
     <Link to="/suicide"  state={{
          value: location.state.value +3
        }}className="btn btn-primary custombutton" >All the time</Link>
     </div>
 </div>

 
 );
}